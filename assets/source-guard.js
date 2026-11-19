"use strict";
// Best-effort only: browser menus and direct file access cannot be blocked.
(() => {
  const block = (event) => { event.preventDefault(); event.stopImmediatePropagation(); };
  const editable = (event) => event.target instanceof Element && Boolean(event.target.closest('input, textarea, select, [contenteditable="true"]'));
  window.addEventListener("contextmenu", (event) => { if (!editable(event)) block(event); }, { capture: true });
  window.addEventListener("keydown", (event) => {
    const key = String(event.key).toLowerCase();
    const command = event.ctrlKey || event.metaKey;
    const developerShortcut = command && (event.shiftKey || event.altKey) && ["i", "j", "c", "k"].includes(key);
    if (editable(event)) return;
    if (key === "f12" || (command && ["u", "s"].includes(key)) || developerShortcut) block(event);
  }, { capture: true });
})();
