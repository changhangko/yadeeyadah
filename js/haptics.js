/*
 iOS tactile bridge.
 Uses the same native <input type="checkbox" switch> interaction that was
 previously confirmed to produce Taptic feedback on iPhone. The switch is
 transparent and positioned directly above selected tap targets; its native
 state change supplies the tactile tick, then the original control is invoked.
*/
const isAppleTouch =
  /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const selectors = [
  '.mutation',
  '.decode',
  '#langToggle','#theme','#index','#about',
  '#projectLangToggle','#projectTheme','#projectIndex','#projectAbout','#close',
  '#nextProject',
  '#portfolioLightbox .portfolio-lightbox-close',
  '#portfolioLightbox .portfolio-lightbox-prev',
  '#portfolioLightbox .portfolio-lightbox-next',
  '#project .pbody img'
].join(',');

const layer=document.createElement('div');
layer.className='native-haptic-layer';
layer.setAttribute('aria-hidden','true');
document.body.appendChild(layer);

const proxyByTarget=new Map();
let raf=0;

function targetVisible(target){
  if(!target?.isConnected) return false;
  if(target.closest('[hidden]')) return false;
  const style=getComputedStyle(target);
  if(style.display==='none'||style.visibility==='hidden'||style.pointerEvents==='none') return false;
  const r=target.getBoundingClientRect();
  return r.width>5 && r.height>5 && r.bottom>0 && r.right>0 && r.top<innerHeight && r.left<innerWidth;
}

function activateTarget(target){
  if(!target?.isConnected) return;
  // Android / supporting browsers get a tiny equivalent pulse as a fallback.
  if(!isAppleTouch && navigator.vibrate) navigator.vibrate(7);
  target.click();
}

function makeProxy(target){
  const input=document.createElement('input');
  input.type='checkbox';
  input.setAttribute('switch','');
  input.tabIndex=-1;
  input.className='native-haptic-proxy';
  input.setAttribute('aria-hidden','true');
  input.addEventListener('click',e=>e.stopPropagation());
  input.addEventListener('change',e=>{
    e.stopPropagation();
    activateTarget(target);
    queueSync();
  });
  layer.appendChild(input);
  proxyByTarget.set(target,input);
  return input;
}

function sync(){
  raf=0;
  const targets=[...document.querySelectorAll(selectors)].filter(targetVisible);
  const live=new Set(targets);

  for(const [target,input] of proxyByTarget){
    if(!live.has(target)){
      input.remove();
      proxyByTarget.delete(target);
    }
  }

  targets.forEach(target=>{
    const input=proxyByTarget.get(target)||makeProxy(target);
    const r=target.getBoundingClientRect();
    input.style.left=r.left+'px';
    input.style.top=r.top+'px';
    input.style.width=r.width+'px';
    input.style.height=r.height+'px';
    input.style.display='block';

    // Do not cover project imagery while the editor is active.
    if(document.getElementById('project')?.classList.contains('editing') && target.matches('#project .pbody img')){
      input.style.display='none';
    }
  });
}

function queueSync(){
  if(raf) return;
  raf=requestAnimationFrame(sync);
}

const observer=new MutationObserver(queueSync);
observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden','aria-hidden','style']});

addEventListener('resize',queueSync,{passive:true});
addEventListener('orientationchange',queueSync,{passive:true});
document.querySelectorAll('.overlay').forEach(el=>el.addEventListener('scroll',queueSync,{passive:true}));
document.addEventListener('visibilitychange',()=>{if(!document.hidden)queueSync()});

// Keep overlays aligned during transitions / opening animations without a busy loop.
document.addEventListener('click',()=>{queueSync();setTimeout(queueSync,80);setTimeout(queueSync,420);setTimeout(queueSync,1700)},true);

queueSync();
