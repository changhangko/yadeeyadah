/* Native WebKit switch test. A DIRECT finger tap, not synthetic clicking.
   Dedicated control keeps existing project/navigation actions unchanged. */
(() => {
  if (!matchMedia('(hover: none) and (pointer: coarse)').matches) return;
  const probe=document.createElement('label');
  probe.id='pwaHapticProbe';
  probe.innerHTML='<span>HAPTIC / TEST</span><input type="checkbox" switch aria-label="Test native switch haptic feedback"><output>OFF</output>';
  document.body.append(probe);
  const input=probe.querySelector('input');
  input.addEventListener('change',()=>{probe.querySelector('output').textContent=input.checked?'ON':'OFF'});
})();
