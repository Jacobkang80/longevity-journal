(()=>{
const p=(window.JOURNAL_POSTS||[]).find(x=>x.slug==='mct-oil-evidence');
if(!p)return;
p.html=p.html.replace(
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coconutsfruits.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/4/49/Coconutsfruits.jpg'
);
})();
