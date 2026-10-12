import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {createInterface} from 'node:readline/promises';
import {BLOG,REPO,BRANCH,resolveQueue,postId,planJob,chooseCategory,publicationHtml,marker,safeState} from './core.mjs';
const exec=promisify(execFile), base=path.dirname(fileURLToPath(import.meta.url));
const data=process.env.LOCALAPPDATA?path.join(process.env.LOCALAPPDATA,'LongevityTistoryPublisher'):path.join(os.homedir(),'.longevity-tistory-publisher');
const stateFile=path.join(data,'state.json'), lockFile=path.join(data,'running.lock');
fs.mkdirSync(data,{recursive:true});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));let stopRequested=false;process.once('SIGINT',()=>{stopRequested=true;log('Stopping after the current operation.');});
const now=()=>new Date().toISOString();
function loadState(){return fs.existsSync(stateFile)?JSON.parse(fs.readFileSync(stateFile,'utf8')):safeState();}
function save(s){const tmp=stateFile+'.tmp';fs.writeFileSync(tmp,JSON.stringify(s,null,2),{mode:0o600});fs.renameSync(tmp,stateFile);}
let state=loadState();
function log(s){console.log(`[${new Date().toLocaleTimeString()}] ${s}`);}
async function gh(endpoint,body){try{const args=['api','--hostname','github.com',endpoint];if(body)args.push('--method','PUT','--input','-');
  if(!body)return JSON.parse((await exec('gh',args,{maxBuffer:12*1024*1024,timeout:30000,windowsHide:true})).stdout);
  return await new Promise((resolve,reject)=>{import('node:child_process').then(({spawn})=>{const p=spawn('gh',args,{windowsHide:true,shell:false,stdio:['pipe','pipe','pipe']});let out='',size=0;const timer=setTimeout(()=>{p.kill();reject(Error('GitHub request timed out'));},30000);p.stdout.on('data',b=>{size+=b.length;if(size>12*1024*1024){p.kill();reject(Error('GitHub response too large'));}else out+=b;});p.stderr.on('data',()=>{});p.on('error',()=>{clearTimeout(timer);reject(Error('GitHub CLI unavailable'));});p.on('close',code=>{clearTimeout(timer);if(code)reject(Error('GitHub write failed'));else try{resolve(JSON.parse(out));}catch{reject(Error('Invalid GitHub response'));}});p.stdin.end(JSON.stringify(body));});});
}catch{throw Error('GitHub connection failed. Run 01_INSTALL.cmd and sign in to GitHub.');}}
async function readRemote(file){return gh(`repos/${REPO}/contents/${file}?ref=${BRANCH}`);}
const payloadCache=new Map();
async function readQueue(){const x=await readRemote('publishing/queue.json');const q=JSON.parse(Buffer.from(x.content.replace(/\s/g,''),'base64').toString('utf8'));return resolveQueue(q,async file=>{const p=await readRemote(file);return JSON.parse(Buffer.from(p.content.replace(/\s/g,''),'base64').toString('utf8'));},payloadCache);}
async function checkGithub(){const u=await gh('user');if(u.login!=='Jacobkang80')throw Error('GitHub must be signed in as Jacobkang80');}
async function syncReceipt(){
  const body={schema:1,blog:BLOG,updated_at:now(),baseline_ids:state.baseline,gatePassed:state.gatePassed,managed:state.managed,jobs:state.jobs};
  // Status only. Browser profile, cookies, passwords and screenshots are never uploaded.
  for(let i=0;i<3;i++){let existing;try{existing=await readRemote('publishing/results/windows.json');}catch{}
    try{await gh(`repos/${REPO}/contents/publishing/results/windows.json`,{message:'Record Tistory publishing result',branch:BRANCH,content:Buffer.from(JSON.stringify(body,null,2)).toString('base64'),...(existing?.sha?{sha:existing.sha}:{})});return;}catch{if(i===2)throw Error('Could not upload receipt. Local result is retained; do not repeat publication.');}}
}
async function restoreReceipt(){
  if(state.baselineReady)return;
  let r;try{r=await readRemote('publishing/results/windows.json');}catch{return;}
  const s=JSON.parse(Buffer.from(r.content.replace(/\s/g,''),'base64').toString('utf8'));
  if(s.schema!==1||s.blog!==BLOG||!Array.isArray(s.baseline_ids)||!s.managed||!s.jobs)throw Error('Invalid remote receipt');
  for(const m of Object.values(s.managed)){if(postId(m.url)!==String(m.postId)||s.baseline_ids.includes(String(m.postId)))throw Error('Invalid managed post registry');}
  state={...safeState(),baseline:s.baseline_ids.map(String),baselineReady:true,gatePassed:s.gatePassed===true,managed:s.managed,jobs:s.jobs};save(state);
}
async function browser(){const {chromium}=await import('playwright');return chromium.launchPersistentContext(path.join(data,'browser-profile'),{headless:false,viewport:{width:1200,height:850}});}
async function readJSON(ctx,route){const r=await ctx.request.get(BLOG+route,{timeout:30000});if(!r.ok()||!(r.headers()['content-type']||'').includes('json'))throw Error('Tistory login expired or request blocked. Run 02_LOGIN.cmd.');return r.json();}
function itemsOf(r){const items=r.items??r.data?.items;if(!Array.isArray(items))throw Error('Tistory post-list structure changed. Publication stopped.');return items;}
async function allPosts(ctx){let all=[];for(let page=1;page<=1000;page++){const x=itemsOf(await readJSON(ctx,`/manage/posts.json?category=-3&page=${page}&searchKeyword=&searchType=title&visibility=all`));if(!x.length)return all;all.push(...x);if(new Set(all.map(p=>String(p.id))).size!==all.length)throw Error('Post-list pagination repeated; stopped');}throw Error('Post list exceeds limit');}
async function initialize(ctx){const r=await readJSON(ctx,'/manage/category.json');const id=chooseCategory(r.categories??r.data?.categories);if(!state.baselineReady){const posts=await allPosts(ctx);state.baseline=posts.map(p=>String(p.id));state.baselineReady=true;save(state);await syncReceipt();log(`Existing ${posts.length} posts protected. HEALTH category verified.`);}return id;}
async function findManaged(ctx,job){const matches=(await allPosts(ctx)).filter(p=>p.title===job.title&&!state.baseline.includes(String(p.id)));const found=[];for(const p of matches){const url=typeof p.permalink==='string'?p.permalink:`${BLOG}/${p.id}`;postId(url);const r=await ctx.request.get(url,{timeout:30000});if(r.ok()&&(await r.text()).includes(marker(job.slug)))found.push(p);}if(found.length>1)throw Error('Multiple matching managed posts; manual review required');return found[0];}
async function verify(ctx,id,job,category){
  const p=(await allPosts(ctx)).find(x=>String(x.id)===String(id));
  if(!p||p.title!==job.title||p.visibility!=='PUBLIC'||Number(p.categoryId)!==category)throw Error('Published title, public status or category could not be verified');
  const publicUrl=`${BLOG}/${id}`;
  const r=await fetch(publicUrl,{signal:AbortSignal.timeout(30000)});const html=await r.text();
  if(!r.ok()||!html.includes(marker(job.slug))||!html.includes(`lj-revision-${job.revision}-${job.sha256}`))throw Error('Anonymous public access or current body revision could not be verified');
  return publicUrl;
}
async function doJob(ctx,job,category){
  const action=planJob(job,state);if(action==='skip'){log(`Already completed: ${job.title}`);return;}
  if(action==='create'){
    const old=await findManaged(ctx,job);if(old)throw Error('Matching publication exists without a completed receipt; run reconcile');
  }else{
    const old=state.managed[job.slug];const r=await ctx.request.get(old.url,{timeout:30000});
    if(!r.ok()||!(await r.text()).includes(marker(job.slug)))throw Error('Managed post marker missing; update refused');
  }
  const id=action==='update'?String(job.expected_post_id):'0';
  const content=publicationHtml(job);
  state.jobs[job.id]={slug:job.slug,revision:job.revision,sha256:job.sha256,operation:job.operation,status:'submitting',started_at:now(),title:job.title};save(state);await syncReceipt();
  // Use the already authenticated dedicated local browser's request context.
  // This is an unofficial Tistory admin endpoint. A challenge/403 is never bypassed.
  const payload={id,title:job.title,content,slogan:'',visibility:20,category,tag:job.tags.join(','),published:1,password:'',uselessMarginForEntry:1,cclCommercial:0,cclDerive:0,type:'post',attachments:[],recaptchaValue:'',draftSequence:null,totalWritingTimeMs:0};
  let url;
  try{
    const route=action==='create'?'/manage/post.json':`/manage/post/${id}.json`;
    const opts={data:payload,headers:{Accept:'application/json',Referer:BLOG+'/manage/post'},timeout:45000};
    const r=action==='create'?await ctx.request.post(BLOG+route,opts):await ctx.request.put(BLOG+route,opts);
    if(!r.ok())throw Error('Tistory rejected the publish request. Possible login, CAPTCHA, policy or endpoint change.');
    const x=await r.json();url=x.entryUrl??x.data?.entryUrl;
    if(typeof url!=='string')throw Error('Tistory returned no post URL');const newId=postId(url);
    if(action==='update'&&newId!==id)throw Error('Unexpected update post ID');
    if(state.baseline.includes(newId))throw Error('Returned original-post ID; stopped');
    state.jobs[job.id].url=url;save(state);
    url=await verify(ctx,newId,job,category);
    state.managed[job.slug]={postId:newId,url,revision:job.revision,sha256:job.sha256};
    state.jobs[job.id]={...state.jobs[job.id],status:'succeeded',url,category:'2. HEALTH',visibility:'PUBLIC',finished_at:now()};save(state);
  }catch(e){state.jobs[job.id]={...state.jobs[job.id],status:'needs_reconciliation',error:e.message,url:url??null};save(state);try{await syncReceipt();}catch{}throw Error(`Submission not confirmed. Do not retry automatically. Run 05_RECONCILE.cmd. ${e.message}`);}
  await syncReceipt();log(`PUBLIC / 2. HEALTH: ${url} — ${job.title}`);
}
async function reconcile(ctx,q,category){
  for(const job of q.jobs){const rec=state.jobs[job.id];if(!rec||!['submitting','needs_reconciliation'].includes(rec.status))continue;
    let id;if(rec.url)id=postId(rec.url);else if(job.operation==='update')id=String(job.expected_post_id);else{const match=await findManaged(ctx,job);if(match)id=String(match.id);}
    if(!id){log(`No matching post found for ${job.id}. Keep blocked; ask ChatGPT to inspect the result.`);continue;}
    if(state.baseline.includes(id))throw Error('Original post protected');
    const url=await verify(ctx,id,job,category);
    // For uncertain updates, also compare body text; an old public post alone is not proof.
    const pr=await ctx.request.get(url,{timeout:30000});const pageHtml=await pr.text();
    if(!pageHtml.includes(`lj-revision-${job.revision}-${job.sha256}`))throw Error('Revision marker missing; keep blocked');
    state.managed[job.slug]={postId:id,url,revision:job.revision,sha256:job.sha256};state.jobs[job.id]={...rec,status:'succeeded',url,category:'2. HEALTH',visibility:'PUBLIC',finished_at:now(),reconciled:true};save(state);await syncReceipt();log(`Recovered publication: ${url}`);
  }
}
async function main(){
  const cmd=process.argv[2]||'status';if(!['login','status','test-post','watch','reconcile'].includes(cmd))throw Error('Unknown command');
  if(cmd==='status'){log(JSON.stringify({state_folder:data,gatePassed:state.gatePassed,managed_posts:Object.keys(state.managed).length,results:state.jobs},null,2));return;}
  await checkGithub();await restoreReceipt();
  const ctx=await browser();const page=ctx.pages()[0]||await ctx.newPage();
  try{
    if(cmd==='login'){
      await page.goto(BLOG+'/manage',{waitUntil:'domcontentloaded'});const rl=createInterface({input:process.stdin,output:process.stdout});
      await rl.question('브라우저에서 카카오 로그인·문자 인증을 직접 완료하세요. 관리자 화면이 보이면 이 창에서 Enter: ');rl.close();
      const category=await initialize(ctx);log(`Login verified. HEALTH category ${category}. Run 03_TEST_ONE.cmd next.`);return;
    }
    const q=await readQueue();const category=await initialize(ctx);
    if(cmd==='reconcile'){await reconcile(ctx,q,category);return;}
    if(cmd==='test-post'){
      const job=q.jobs[0];if(!job)throw Error('Queue empty');await doJob(ctx,job,category);state.gatePassed=true;save(state);await syncReceipt();log('First public post verified. You may run 04_AUTO_PUBLISH.cmd.');return;
    }
    if(!state.gatePassed)throw Error('First-post verification required. Run 03_TEST_ONE.cmd.');
    log('Watching GitHub queue every 30 seconds. Keep this window and PC running. Ctrl+C stops.');
    while(!stopRequested){const fresh=await readQueue();if(fresh.enabled){for(const j of fresh.jobs){if(stopRequested)break;await doJob(ctx,j,category);}}if(!stopRequested)await sleep(30000);}
  }finally{await ctx.close();}
}
function acquire(){try{fs.writeFileSync(lockFile,JSON.stringify({pid:process.pid,at:now()}),{flag:'wx'});}catch{
  let l;try{l=JSON.parse(fs.readFileSync(lockFile,'utf8'));}catch{throw Error('Invalid worker lock; see README');}
  let alive=true;try{process.kill(l.pid,0);}catch(e){if(e.code==='ESRCH')alive=false;else throw Error('Cannot determine existing worker status');}
  if(alive)throw Error('Another publisher is running. Close it first.');fs.unlinkSync(lockFile);fs.writeFileSync(lockFile,JSON.stringify({pid:process.pid,at:now()}),{flag:'wx'});
}}
try{acquire();await main();}catch(e){console.error('\nSTOPPED: '+e.message);process.exitCode=1;}finally{try{const l=JSON.parse(fs.readFileSync(lockFile,'utf8'));if(l.pid===process.pid)fs.unlinkSync(lockFile);}catch{}}
