const portfolio=document.getElementById('portfolio'),status=document.getElementById('status'),button=document.getElementById('printButton');
const escapeText=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function resizePages(){const scale=Math.min(1,(document.documentElement.clientWidth-28)/(420*96/25.4));document.querySelectorAll('.page-wrap').forEach(w=>{w.style.width=420*96/25.4*scale+'px';w.style.height=297*96/25.4*scale+'px';w.firstElementChild.style.transform='scale('+scale+')';});}
button.addEventListener('click',()=>window.print());window.addEventListener('resize',resizePages);
async function build(){
 const [planResponse,projectsResponse]=await Promise.all([fetch('/print/portfolio-data.json',{cache:'no-store'}),fetch('/data/projects.json',{cache:'no-store'}).catch(()=>null)]);
 if(!planResponse.ok)throw new Error('无法加载版面数据');
 const plan=await planResponse.json();const projects=projectsResponse?.ok?await projectsResponse.json():[];const byCategory=Object.fromEntries(projects.map(p=>[p.categoryKey,p]));
 portfolio.innerHTML=plan.pages.map((p,index)=>{
  const nodes=p.nodes.map(n=>{
   const attrs='style="left:'+n.x+'mm;top:'+n.y+'mm;width:'+n.w+'mm;height:'+n.h+'mm;'+(n.type==='text'?'font-size:'+n.size+'pt;'+(n.bold?'font-weight:600;':'')+(n.color?'color:'+n.color+';':''):'')+'"';
   if(n.type==='image'){
    if(n.crop){const [a,b,d,e]=n.crop,iw=n.originalWidth,ih=n.originalHeight;return '<figure class="page-node diagram" '+attrs+' aria-label="'+escapeText(p.title+' / 原始图纸局部放大')+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="'+[a*iw,b*ih,(d-a)*iw,(e-b)*ih].join(' ')+'" preserveAspectRatio="xMidYMid meet"><image href="/'+escapeText(n.path)+'" x="0" y="0" width="'+iw+'" height="'+ih+'"/></svg></figure>';}
    return '<figure class="page-node image" '+attrs+'><img src="/'+escapeText(n.path)+'" alt="'+escapeText(p.title+' / 项目图像')+'" loading="eager"></figure>';
   }
   if(n.type==='qr')return '<a class="page-node diagram" '+attrs+' href="https://changhangko.cc" aria-label="作品集网站二维码">'+n.svg+'</a>';
   if(n.type==='diagram')return '<figure class="page-node diagram" '+attrs+' aria-label="'+escapeText(p.title+' / 占位图解')+'">'+n.svg+'</figure>';
   let value=n.text;if(n.source){const [category,field]=n.source.split('.');value=byCategory[category]?.zh?.[field]||value;}
   return '<div class="page-node text" '+attrs+'>'+escapeText(value)+'</div>';
  }).join('');
  return '<div class="page-wrap"><article class="sheet '+(p.dark?'dark':'')+'" aria-label="'+(index+1)+' / '+escapeText(p.title)+'"><p class="page-category">'+escapeText(p.category)+'</p><h1 class="page-title">'+escapeText(p.title)+'</h1><p class="page-subtitle">'+escapeText(p.subtitle)+'</p>'+nodes+'<div class="page-footer"><span>GARRY ZHANG / PORTFOLIO DRAFT</span><span>'+String(index+1).padStart(2,'0')+' / '+plan.pages.length+'</span></div></article></div>';
 }).join('');
 resizePages();
 await Promise.race([Promise.all([...document.images].map(img=>img.decode().catch(()=>null))),new Promise(resolve=>setTimeout(resolve,12000))]);
 await document.fonts.ready;
 const missing=[...document.images].filter(img=>!img.complete||!img.naturalWidth).length;
 button.disabled=false;document.body.classList.add('print-ready');
 status.textContent=plan.pages.length+' PAGES / A3 LANDSCAPE / DRAFT'+(missing?' / '+missing+' IMAGES PENDING':' / READY');
}
build().catch(error=>{status.textContent='加载失败：'+error.message;console.error(error);});
