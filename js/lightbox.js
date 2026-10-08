const root=document.getElementById('portfolioLightbox');
const image=document.getElementById('portfolioLightboxImage');
const caption=document.getElementById('portfolioLightboxCaption');
const count=document.getElementById('portfolioLightboxCount');
const closeBtn=root?.querySelector('.portfolio-lightbox-close');
const prevBtn=root?.querySelector('.portfolio-lightbox-prev');
const nextBtn=root?.querySelector('.portfolio-lightbox-next');

let items=[];
let index=0;
let touchStartX=null;
let touchStartY=null;

function getGroup(clicked){
  const scope=
    clicked.closest('.arch-subproject') ||
    clicked.closest('.parametric-hero') ||
    clicked.closest('.todai-case') ||
    clicked.closest('.studio-case') ||
    clicked.closest('#project .pbody') ||
    document.getElementById('project');

  return [...scope.querySelectorAll('img')].filter(img=>{
    if(img.closest('.portfolio-lightbox')) return false;
    if(img.classList.contains('profile-image')) return false;
    if(img.width<80 || img.height<80) return false;
    return !!(img.currentSrc || img.src);
  });
}

function show(i){
  if(!items.length) return;
  index=(i+items.length)%items.length;
  const source=items[index];
  image.src=source.currentSrc || source.src;
  image.alt=source.alt || '';
  const fig=source.closest('figure');
  const figcaption=fig?.querySelector('figcaption');
  caption.textContent=figcaption?.textContent?.trim() || source.alt || '';
  count.textContent=String(index+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');
  const multi=items.length>1;
  prevBtn.hidden=!multi;
  nextBtn.hidden=!multi;
}

function openFrom(img){
  items=getGroup(img);
  index=Math.max(0,items.indexOf(img));
  show(index);
  root.classList.add('is-open');
  root.setAttribute('aria-hidden','false');
  document.body.classList.add('lightbox-open');
  closeBtn.focus({preventScroll:true});
}

function close(){
  root.classList.remove('is-open');
  root.setAttribute('aria-hidden','true');
  document.body.classList.remove('lightbox-open');
  image.removeAttribute('src');
}

document.addEventListener('click',e=>{
  const img=e.target.closest('#project .pbody img');
  if(!img || img.closest('.profile-decode')) return;
  if(e.target.closest('a,button')) return;
  e.preventDefault();
  openFrom(img);
});

closeBtn?.addEventListener('click',close);
prevBtn?.addEventListener('click',()=>show(index-1));
nextBtn?.addEventListener('click',()=>show(index+1));

root?.addEventListener('click',e=>{
  if(e.target===root) close();
});

document.addEventListener('keydown',e=>{
  if(!root?.classList.contains('is-open')) return;
  if(e.key==='Escape') close();
  if(e.key==='ArrowLeft') show(index-1);
  if(e.key==='ArrowRight') show(index+1);
});

root?.addEventListener('touchstart',e=>{
  if(e.touches.length!==1){touchStartX=null;touchStartY=null;return;}
  touchStartX=e.touches[0].clientX;
  touchStartY=e.touches[0].clientY;
},{passive:true});

root?.addEventListener('touchend',e=>{
  if(touchStartX===null || touchStartY===null || !e.changedTouches.length) return;
  const dx=e.changedTouches[0].clientX-touchStartX;
  const dy=e.changedTouches[0].clientY-touchStartY;
  touchStartX=null;touchStartY=null;
  if(Math.abs(dx)<52 || Math.abs(dx)<Math.abs(dy)*1.25) return;
  show(index+(dx<0?1:-1));
},{passive:true});
