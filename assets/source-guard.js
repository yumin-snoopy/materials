"use strict";
// Best-effort only: browser menus and direct file access cannot be blocked.
(() => {
  const block = (event) => { event.preventDefault(); event.stopImmediatePropagation(); };
  window.addEventListener("contextmenu", block, { capture: true });
  window.addEventListener("keydown", (event) => {
    const key = String(event.key).toLowerCase();
    const command = event.ctrlKey || event.metaKey;
    const developerShortcut = command && (event.shiftKey || event.altKey) && ["i", "j", "c", "k"].includes(key);
    if (key === "f12" || (command && key === "u") || developerShortcut) block(event);
  }, { capture: true });
})();
