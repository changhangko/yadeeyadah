const $=s=>document.querySelector(s);
const E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let n=0;const N=()=>String(n++).padStart(2,"0");
const S=(cls,body,dark=false)=>'<section class="sheet '+cls+(dark?' dark':'')+'">'+body+'<span class="folio">'+N()+'</span></section>';
Promise.all([
 fetch("/data/projects.json").then(r=>r.json()),
 fetch("/data/photography.json").then(r=>r.json()).catch(()=>null)
]).then(([projects,photo])=>{
 const pages=[];
 pages.push(S("cover",'<div class="grid"><div class="meta rule">GARRY ZHANG / SELECTED WORKS / 2026</div><h1>DESIGNING<br>BETWEEN<br>SPACE +<br>SYSTEMS</h1><div class="sub">Creative Technologist / Computational Designer<br><br>Architecture · Information · Computation · Photography · Research</div></div>',true));
 pages.push(S("index",'<div class="grid"><h2>INDEX / SELECTED WORKS</h2><div class="index-list">'+projects.map((p,i)=>'<div class="index-row"><strong>'+E((p.zh||p.en).title)+'</strong><span>'+E((p.zh||p.en).brief)+'</span></div>').join("")+'</div></div>'));
 projects.forEach((p,i)=>{
  const x=p.zh||p.en;
  pages.push(S("chapter",'<div class="grid"><div class="top meta rule">'+E(x.meta)+'<span style="float:right">'+E(x.year)+'</span></div><h1>'+E(x.title)+'</h1><div class="brief">'+E(x.brief)+'</div><div class="desc">'+E(x.desc)+'</div><div class="facts"><span class="label">角色</span>'+E(x.role)+'<br><br><span class="label">工具</span>'+E(x.tools)+'<br><br><span class="label">输出</span>'+E(x.output)+'</div></div>',i%2===1));
  pages.push(S("essay",'<div class="grid"><div class="top meta rule">'+'问题 + 设计判断'</div><div class="question">“'+E(x.question)+'”</div><div class="built"><span class="label">项目 / 背景</span>'+E(x.built)+'</div><div class="judgement"><span class="label">设计判断</span>'+E(x.judgement)+'</div></div>'));
  if(x.media?.length)pages.push(S("media-page",'<div class="grid"><h2>项目内容</h2><div class="media-list">'+x.media.map((m,k)=>'<div class="media-row"><span>'+String(k+1).padStart(2,"0")+'</span><strong>'+E(m)+'</strong><span>→</span></div>').join("")+'</div></div>'));
  if(p.categoryKey==="observation"&&photo?.photos?.length){
   const hero=photo.photos[0],rest=photo.photos.slice(1,9);
   pages.push(S("photo-page",'<div class="grid"><h2>观察 / 摄影精选</h2><figure class="photo-hero"><img src="/'+E(hero.src)+'"></figure><div class="photo-copy"><span class="label">'+E((hero.caption&&hero.caption.zh)||hero.caption.en)+'</span><p>'+E((photo.note&&photo.note.zh)||photo.note.en)+'</p></div></div>',true));
   pages.push(S("photo-page",'<div class="grid"><h2>序列 / CONTACT SHEET</h2><div class="photo-contact">'+rest.map(ph=>'<figure class="photo-card"><img src="/'+E(ph.src)+'"><figcaption class="caption">'+E(ph.caption.en)+'</figcaption></figure>').join("")+'</div></div>'));
  }
  if(x.taste?.length)pages.push(S("decisions",'<div class="grid"><h2>审美 / 决策记录</h2><div class="decision-list">'+x.taste.map(t=>'<div class="decision"><strong class="label">'+E(t[0])+'</strong><p>'+E(t[1])+'</p></div>').join("")+'</div></div>',i%2===0));
 });
 pages.push(S("closing",'<div class="grid"><h2>GARRY ZHANG<br>CREATIVE TECHNOLOGIST<br>/ COMPUTATIONAL DESIGNER</h2><p>Melbourne / Beijing<br>changhangko.cc</p></div>',true));
 $("#portfolio").innerHTML=pages.join("");
 $("#status").textContent=projects.length+" SECTIONS / "+n+" PAGES / A3 LANDSCAPE";
}).catch(err=>{$("#status").textContent="LOAD ERROR";console.error(err)});