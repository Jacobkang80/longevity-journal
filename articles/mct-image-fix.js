(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='mct-oil-evidence');
if(p){
  p.html=p.html.replace(
    'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coconutsfruits.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Coconutsfruits.jpg'
  );
}

const topics=document.getElementById('health-topics');
const addTopic=(href,label)=>{
  if(!topics || Array.from(topics.querySelectorAll('a')).some(a=>a.getAttribute('href')===href))return;
  topics.append(document.createTextNode(' · '));
  const a=document.createElement('a');
  a.href=href;
  a.textContent=label;
  topics.append(a);
};
addTopic('#topic/노화','Aging');
addTopic('#topic/감사','Gratitude');
addTopic('#topic/수면','Sleep');
addTopic('#topic/항노화','Supplements');
addTopic('#topic/근육','Muscle');
addTopic('#topic/VO2max','VO₂max');

const refreshRoute=()=>{
  let tries=0;
  const run=()=>{
    if(typeof window.route==='function') window.route();
    else if(++tries<20) setTimeout(run,100);
  };
  run();
};
const ensureScript=(src,key,slug)=>{
  if((window.JOURNAL_POSTS||[]).some(x=>x.slug===slug))return;
  if(document.querySelector(`script[data-longform="${key}"]`))return;
  const s=document.createElement('script');
  s.src=src;
  s.async=false;
  s.dataset.longform=key;
  s.onload=refreshRoute;
  document.head.appendChild(s);
};
ensureScript('articles/aging-strategy-deep.js','aging','aging-reversal-healthspan-guide');
ensureScript('articles/gratitude-deep.js','gratitude','gratitude-health-evidence');
ensureScript('articles/sleep-deep.js','sleep','sleep-longevity-evidence');
ensureScript('articles/longevity-supplements-2026.js','supplements','longevity-supplements-2026');
ensureScript('articles/muscle-longevity-deep.js','muscle','muscle-longevity-evidence');
ensureScript('articles/vo2max-longevity-deep.js','vo2max','vo2max-longevity-evidence');
})();