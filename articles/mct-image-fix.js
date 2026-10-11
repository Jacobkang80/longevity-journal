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
addTopic('#topic/혈당·인슐린','혈당·인슐린');
addTopic('#topic/영양 감지','Nutrient sensing');
addTopic('#topic/생물학적 나이','Biological age');
addTopic('#topic/Hormesis','Hormesis');
addTopic('#topic/Geroscience','Geroscience');
addTopic('#topic/Senolytics','Senolytics');
addTopic('#topic/장수 영양소','Longevity nutrients');
addTopic('#topic/Microbiome','Microbiome');
addTopic('#topic/심혈관','Cardiovascular');
addTopic('#topic/생체나이 계산','Biological Age Lab');

const refreshRoute=()=>{
  let tries=0;
  const run=()=>{
    if(typeof window.route==='function') window.route();
    else if(++tries<20) setTimeout(run,100);
  };
  run();
};
const ensureScript=(src,key,slug,onload)=>{
  if((window.JOURNAL_POSTS||[]).some(x=>x.slug===slug)){
    if(onload) onload();
    return;
  }
  if(document.querySelector(`script[data-longform="${key}"]`))return;
  const s=document.createElement('script');
  s.src=src;
  s.async=false;
  s.dataset.longform=key;
  s.onload=()=>{
    if(onload) onload();
    refreshRoute();
  };
  document.head.appendChild(s);
};
const fixMicrobiomeCopy=()=>{
  const post=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='microbiome-healthy-aging-evidence');
  if(!post)return;
  post.html=post.html
    .replace(
      '<h2>07. 동물실험은 ‘원인일 가능성’을 보여주는 연구 도구다</h2>',
      '<h2>07. 장내미생물군을 바꾸면 노화 지표도 달라질까? — 동물실험이 보여주는 인과성</h2>'
    )
    .replaceAll('미생물 군집 이식','장내미생물군 이식');
};
ensureScript('articles/aging-strategy-deep.js','aging','aging-reversal-healthspan-guide');
ensureScript('articles/gratitude-deep.js','gratitude','gratitude-health-evidence');
ensureScript('articles/sleep-deep.js','sleep','sleep-longevity-evidence');
ensureScript('articles/longevity-supplements-2026.js','supplements','longevity-supplements-2026');
ensureScript('articles/muscle-longevity-deep.js','muscle','muscle-longevity-evidence');
ensureScript('articles/vo2max-longevity-deep.js','vo2max','vo2max-longevity-evidence');
ensureScript('articles/insulin-resistance-deep.js','insulin-resistance','insulin-resistance-longevity-evidence');
ensureScript('articles/glycemic-variability-deep.js','glycemic-variability','glycemic-variability-glucose-spikes-evidence');
ensureScript('articles/nutrient-sensing-mtor-ampk-sirtuin-deep.js','nutrient-sensing','mtor-ampk-sirtuin-nutrient-sensing');
ensureScript('articles/epigenetic-clock-biological-age-deep.js','epigenetic-clock','epigenetic-clock-biological-age-evidence');
ensureScript('articles/sauna-cold-exposure-longevity-deep.js','sauna-cold','sauna-cold-exposure-longevity-evidence');
ensureScript('articles/rapamycin-metformin-geroscience-deep.js','geroscience-drugs','rapamycin-metformin-geroscience-evidence');
ensureScript('articles/senolytics-fisetin-map-deep.js','senolytics-map','senolytics-fisetin-current-evidence');
ensureScript('articles/taurine-glycine-creatine-longevity-deep.js','longevity-nutrients','taurine-glycine-creatine-longevity-evidence');
ensureScript('articles/microbiome-healthy-aging-deep.js?v=20261011-1408','microbiome-aging-v2','microbiome-healthy-aging-evidence',fixMicrobiomeCopy);
ensureScript('articles/cardiovascular-longevity-numbers-deep.js?v=20261011-11','cardiovascular-longevity','cardiovascular-longevity-numbers');
ensureScript('articles/biological-age-lab.js?v=20261011-lab3','biological-age-lab-v3','biological-age-lab',()=>window.BioAgeLab?.init());
})();