(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='mct-oil-evidence');
if(p){
  p.html=p.html.replace(
    'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coconutsfruits.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Coconutsfruits.jpg'
  );
}

// Load the long-form aging/healthspan guide without touching the main asset project.
const topics=document.getElementById('health-topics');
if(topics && !Array.from(topics.querySelectorAll('a')).some(a=>a.getAttribute('href')==='#topic/노화')){
  topics.append(document.createTextNode(' · '));
  const a=document.createElement('a');
  a.href='#topic/노화';
  a.textContent='Aging';
  topics.append(a);
}
if(!document.querySelector('script[data-aging-guide]')){
  const s=document.createElement('script');
  s.src='articles/aging-strategy-deep.js';
  s.async=false;
  s.dataset.agingGuide='1';
  s.onload=()=>{
    let tries=0;
    const refresh=()=>{
      if(typeof window.route==='function') window.route();
      else if(++tries<10) setTimeout(refresh,100);
    };
    refresh();
  };
  document.head.appendChild(s);
}
})();
