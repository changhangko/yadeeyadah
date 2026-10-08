/* Quiet touch feedback study. Does not replace the existing click / hover logic. */
(() => {
  if (!window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
  const targets = '.mutation, .controls button, .project-head-actions button, .panelClose, .index-row, .next-project';
  let last = null;
  function clear() { if (last) last.classList.remove('touch-pressed'); last = null; }
  document.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'touch') return;
    clear();
    const target = event.target.closest(targets);
    if (!target) return;
    last = target;
    target.classList.add('touch-pressed');
  }, { passive: true, capture: true });
  for (const type of ['pointerup','pointercancel','scroll']) {
    document.addEventListener(type, clear, { passive: true, capture: true });
  }
  window.addEventListener('blur', clear);
})();
