import { createHash } from 'node:crypto';
export const BLOG = 'https://myepic2.tistory.com';
export const REPO = 'Jacobkang80/longevity-journal';
export const BRANCH = 'tistory-publishing';
export const hash = s => createHash('sha256').update(s,'utf8').digest('hex');
export async function resolveQueue(q,fetchPayload,cache=new Map()){
  if(!Array.isArray(q.jobs))throw Error('Invalid queue');
  const jobs=[];for(const entry of q.jobs){
    if(!entry.payload_path){jobs.push(entry);continue;}
    if(!/^[a-z0-9][a-z0-9-]{2,110}-r\d+$/.test(entry.id)||entry.payload_path!==`publishing/jobs/${entry.id}.json`)throw Error('Invalid payload path');
    const key=entry.id+':'+entry.sha256;let j=cache.get(key);if(!j){j=await fetchPayload(entry.payload_path);cache.set(key,j);}
    for(const field of ['id','slug','revision','operation','sha256','expected_post_id'])if(j[field]!==entry[field])throw Error('Manifest does not match payload');
    jobs.push(j);
  }return validateQueue({...q,jobs});
}
export function validateQueue(q) {
  if(q.schema!==1 || q.blog!==BLOG || q.category!=='2. HEALTH' || typeof q.enabled!=='boolean' || !Array.isArray(q.jobs)) throw Error('Invalid queue configuration');
  if(q.jobs.length>100) throw Error('Queue exceeds 100 jobs');
  const seen=new Set();
  for(const j of q.jobs){
    if(!/^[a-z0-9][a-z0-9-]{2,100}$/.test(j.slug)||!Number.isSafeInteger(j.revision)||j.revision<1||!['create','update'].includes(j.operation))throw Error('Invalid job identity');
    if(j.id!==`${j.slug}-r${j.revision}`||seen.has(j.id))throw Error('Invalid or duplicate job ID');seen.add(j.id);
    if(typeof j.title!=='string'||!j.title.trim()||j.title.length>200||typeof j.html!=='string'||j.html.length<100||Buffer.byteLength(j.html)>500000)throw Error('Invalid title or HTML');
    if(!Array.isArray(j.tags)||j.tags.length>10||j.tags.some(t=>typeof t!=='string'||t.length>40||t.includes(',')))throw Error('Invalid tags');
    if(j.sha256!==hash(j.html))throw Error('HTML digest mismatch');
    if(/<\s*(script|iframe|object|embed|form|input|button)\b|\bon[a-z]+\s*=|javascript\s*:/i.test(j.html))throw Error('Active content is not allowed');
    if(j.operation==='update'&&!/^\d+$/.test(String(j.expected_post_id)))throw Error('Update requires expected_post_id');
  }
  return q;
}
export function postId(url) {const u=new URL(url);if(u.origin!==BLOG||!/^\/\d+$/.test(u.pathname)||u.search||u.hash)throw Error('Unexpected post URL');return u.pathname.slice(1);}
export function planJob(job,state){
  const record=state.jobs[job.id];
  if(record?.sha256&&record.sha256!==job.sha256)throw Error('Job revision changed; create a new revision');
  if(record?.status==='succeeded')return 'skip';
  if(record&&['submitting','needs_reconciliation','blocked','failed'].includes(record.status))throw Error(`Job ${job.id} requires resolution (${record.status})`);
  const uncertain=Object.values(state.jobs).find(r=>r.slug===job.slug&&['submitting','needs_reconciliation'].includes(r.status));
  if(uncertain)throw Error('Uncertain prior submission; no retry');
  const managed=state.managed[job.slug];
  if(job.operation==='create'){if(managed)throw Error('Already managed; use update');return 'create';}
  if(!managed||String(managed.postId)!==String(job.expected_post_id)||state.baseline.includes(String(managed.postId)))throw Error('Only program-created posts may be updated');
  if(job.revision<=managed.revision)throw Error('Update revision must increase');
  return 'update';
}
export function chooseCategory(nodes){
  const found=[];function walk(xs){for(const x of xs||[]){if(x.name==='2. HEALTH'||x.label==='2. HEALTH')found.push(x);walk(x.children);}}walk(nodes);
  if(found.length!==1||!Number.isSafeInteger(Number(found[0].id))||Number(found[0].id)<1)throw Error('HEALTH category not uniquely found');return Number(found[0].id);
}
export function marker(slug){return `lj-managed-${slug}`;}
export function publicationHtml(job){return `<div id="${marker(job.slug)}"><span id="lj-revision-${job.revision}-${job.sha256}"></span>${job.html}<p style="font-size:12px;color:#777">LONGEVITY JOURNAL · 신규 편집본</p></div>`;}
export function safeState(){return {schema:1,baseline:[],baselineReady:false,gatePassed:false,managed:{},jobs:{}};}
