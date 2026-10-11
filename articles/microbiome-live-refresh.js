(()=>{
const SLUG='microbiome-healthy-aging-evidence';
const SRC='articles/microbiome-healthy-aging-deep.js?v=20261011-1408';
let tries=0;
const refreshRoute=()=>{
  let n=0;
  const run=()=>{
    if(typeof window.route==='function') window.route();
    else if(++n<20) setTimeout(run,100);
  };
  run();
};
const applyCopyFix=p=>{
  if(!p)return;
  p.html=p.html
    .replace(
      '<h2>07. 동물실험은 ‘원인일 가능성’을 보여주는 연구 도구다</h2>',
      '<h2>07. 장내미생물군을 바꾸면 노화 지표도 달라질까? — 동물실험이 보여주는 인과성</h2>'
    )
    .replaceAll('미생물 군집 이식','장내미생물군 이식')
    .replaceAll('사람의 장내미생물군 이식','장내미생물군 이식');
};
const run=()=>{
  const posts=window.JOURNAL_POSTS=window.JOURNAL_POSTS||[];
  const idx=posts.findIndex(p=>p.slug===SLUG);
  if(idx<0){
    if(++tries<50) setTimeout(run,100);
    return;
  }
  posts.splice(idx,1);
  const stale=document.querySelector('script[data-microbiome-refresh="1"]');
  if(stale) stale.remove();
  const s=document.createElement('script');
  s.src=SRC;
  s.async=false;
  s.dataset.microbiomeRefresh='1';
  s.onload=()=>{
    applyCopyFix(posts.find(p=>p.slug===SLUG));
    refreshRoute();
  };
  document.head.appendChild(s);
};
run();
})();