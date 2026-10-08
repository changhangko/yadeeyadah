/* PWA touch study v3: subtle tactile response where supported.
   iOS Safari / installed iPhone PWAs currently do not provide the Vibration API.
   No audio, fake iOS switch controls, or perpetual feedback. */
(() => {
  if (!window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
  const targets = '.mutation, .controls button, .project-head-actions button, .panelClose, .index-row, .next-project, .decode';
  let pressed = null;
  let lastVibrationAt = 0;
  const canVibrate = typeof navigator.vibrate === 'function';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function clear() {
    if (pressed) pressed.classList.remove('touch-pressed');
    pressed = null;
  }
  document.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'touch') return;
    clear();
    const target = event.target.closest(targets);
    if (!target) return;
    pressed = target;
    target.classList.add('touch-pressed');
  }, { passive: true, capture: true });

  for (const type of ['pointerup', 'pointercancel', 'scroll']) {
    document.addEventListener(type, clear, { passive: true, capture: true });
  }
  window.addEventListener('blur', clear);

  // Only intentional activations, never passive animation or scrolling.
  document.addEventListener('click', event => {
    if (!canVibrate || reduceMotion.matches) return;
    const el = event.target.closest(targets);
    if (!el || el.disabled) return;
    const now = performance.now();
    if (now - lastVibrationAt < 160) return;
    lastVibrationAt = now;
    // A single tiny tick on supported Android browsers; ignored on iPhone.
    navigator.vibrate(8);
  }, { capture: true });
})();
