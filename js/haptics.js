/*
 iOS tactile bridge — scroll-safe version.

 Important: native iOS switch proxies must NEVER cover scrollable media/content.
 Only compact tap controls receive a proxy. Mutation controls are active only on
 the home/genome screen, project controls only while the project panel is open,
 and lightbox controls only while the lightbox is open.
*/
const isAppleTouch =
  /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const HOME_SELECTORS = ['.mutation','.decode'];
const PROJECT_SELECTORS = [
  '#projectLangToggle','#projectTheme','#projectIndex','#projectAbout','#close',
];
const GLOBAL_SELECTORS = ['#langToggle','#theme','#index','#about'];
const LIGHTBOX_SELECTORS = [
  '#portfolioLightbox .portfolio-lightbox-close',
  '#portfolioLightbox .portfolio-lightbox-prev',
  '#portfolioLightbox .portfolio-lightbox-next'
];

const layer=document.createElement('div');
layer.className='native-haptic-layer';
layer.setAttribute('aria-hidden','true');
document.body.appendChild(layer);

const proxyByTarget=new Map();
let raf=0;

// Dedicated offscreen native switch for transition pulses.
// It never overlays content, so it cannot interfere with scrolling or taps.
const sequenceSwitch=document.createElement('input');
sequenceSwitch.type='checkbox';
sequenceSwitch.setAttribute('switch','');
sequenceSwitch.tabIndex=-1;
sequenceSwitch.setAttribute('aria-hidden','true');
sequenceSwitch.className='native-haptic-sequence-switch';
document.body.appendChild(sequenceSwitch);

let sequenceToken=0;
function fireSequencePulse(){
  // WebKit may expose tactile feedback when the native switch changes state.
  // Other browsers fall back to a tiny vibration pulse where supported.
  sequenceSwitch.click();
  if(!isAppleTouch && navigator.vibrate) navigator.vibrate(6);
}
window.addEventListener('portfolio:haptic-sequence',e=>{
  const pattern=Array.isArray(e.detail?.pattern)?e.detail.pattern:[420,750,1010,1210,1360];
  const token=++sequenceToken;
  pattern.forEach(delay=>{
    setTimeout(()=>{
      if(token!==sequenceToken || document.hidden) return;
      fireSequencePulse();
    },Math.max(0,Number(delay)||0));
  });
});

function panelOpen(id){
  const el=document.getElementById(id);
  return !!el && (
    el.classList.contains('visible') ||
    el.classList.contains('is-open') ||
    el.getAttribute('aria-hidden')==='false'
  );
}

function homeIsActive(){
  return !panelOpen('project') &&
         !panelOpen('indexPanel') &&
         !panelOpen('aboutPanel') &&
         !panelOpen('portfolioLightbox') &&
         !panelOpen('editorLogin');
}

function targetAllowed(target){
  if(target.matches(HOME_SELECTORS.join(','))) return homeIsActive();
  if(target.matches(PROJECT_SELECTORS.join(','))) return panelOpen('project') && !panelOpen('portfolioLightbox');
  if(target.matches(LIGHTBOX_SELECTORS.join(','))) return panelOpen('portfolioLightbox');
  if(target.matches(GLOBAL_SELECTORS.join(','))) return homeIsActive();
  return false;
}

function targetVisible(target){
  if(!target?.isConnected || !targetAllowed(target)) return false;
  if(target.closest('[hidden],[aria-hidden="true"]')) return false;
  const style=getComputedStyle(target);
  if(style.display==='none'||style.visibility==='hidden'||style.pointerEvents==='none') return false;
  const r=target.getBoundingClientRect();
  return r.width>5 && r.height>5 &&
         r.bottom>0 && r.right>0 && r.top<innerHeight && r.left<innerWidth;
}

function activateTarget(target){
  if(!target?.isConnected || !targetAllowed(target)) return;
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

  // A native switch change creates the iPhone tactile tick.
  input.addEventListener('click',e=>e.stopPropagation());
  input.addEventListener('change',e=>{
    e.stopPropagation();
    if(targetAllowed(target)) activateTarget(target);
    queueSync();
  });

  layer.appendChild(input);
  proxyByTarget.set(target,input);
  return input;
}

function currentTargets(){
  const selectors=[];
  if(homeIsActive()) selectors.push(...HOME_SELECTORS,...GLOBAL_SELECTORS);
  if(panelOpen('project') && !panelOpen('portfolioLightbox')) selectors.push(...PROJECT_SELECTORS);
  if(panelOpen('portfolioLightbox')) selectors.push(...LIGHTBOX_SELECTORS);
  if(!selectors.length) return [];
  return [...document.querySelectorAll(selectors.join(','))].filter(targetVisible);
}

function sync(){
  raf=0;
  const targets=currentTargets();
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
  });
}

function queueSync(){
  if(raf) return;
  raf=requestAnimationFrame(sync);
}

const observer=new MutationObserver(queueSync);
observer.observe(document.body,{
  subtree:true,
  childList:true,
  attributes:true,
  attributeFilter:['class','hidden','aria-hidden','style']
});

addEventListener('resize',queueSync,{passive:true});
addEventListener('orientationchange',queueSync,{passive:true});
document.addEventListener('visibilitychange',()=>{if(!document.hidden) queueSync()});

// Scrolling should remain 100% native. Proxies are only tiny controls now; this
// keeps their positions aligned without ever placing a proxy over project media.
document.querySelectorAll('.overlay').forEach(el=>{
  el.addEventListener('scroll',queueSync,{passive:true});
});

// Resync around project/lightbox transitions so stale home proxies disappear
// immediately when a panel becomes active.
document.addEventListener('click',()=>{
  queueSync();
  setTimeout(queueSync,50);
  setTimeout(queueSync,250);
  setTimeout(queueSync,1700);
},true);

queueSync();
