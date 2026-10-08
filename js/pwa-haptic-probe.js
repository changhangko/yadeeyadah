/* Preview-only loading study: the user's direct tap on a native switch
   may produce one iOS system haptic. Animated frames do NOT emit haptics. */
(() => {
  if (!matchMedia('(hover: none) and (pointer: coarse)').matches) return;
  const probe=document.createElement('label');
  probe.id='pwaHapticProbe';
  probe.innerHTML='<span>LOADING / TEST</span><input type="checkbox" switch aria-label="Play loading experiment"><output>PLAY</output>';
  document.body.append(probe);
  const toggle=probe.querySelector('input');
  const layer=document.createElement('div');
  layer.id='pwaLoadingStudy';
  layer.setAttribute('aria-hidden','true');
  layer.innerHTML='<div class="pwa-loading-letters" aria-hidden="true">ACGTACGTACGTACGT</div><div class="pwa-loading-label">DECODING <span>000</span></div>';
  document.body.append(layer);
  let timer;
  toggle.addEventListener('change',()=>{
    clearInterval(timer);
    layer.classList.add('playing');
    layer.setAttribute('aria-hidden','false');
    let step=0;
    const chars='ACGT';
    const letters=layer.querySelector('.pwa-loading-letters');
    const count=layer.querySelector('.pwa-loading-label span');
    letters.textContent='ACGTACGTACGTACGT';
    count.textContent='000';
    timer=setInterval(()=>{
      step++;
      letters.textContent=Array.from({length:16},(_,i)=> step>11-i/3?'ACGT'[i%4]:chars[Math.random()*4|0]).join('');
      count.textContent=String(Math.min(100,Math.round(step/16*100))).padStart(3,'0');
      if(step>=16){
        clearInterval(timer);
        setTimeout(()=>{
          layer.classList.remove('playing');
          layer.setAttribute('aria-hidden','true');
          toggle.checked=false;
        },250);
      }
    },65);
  });
})();
