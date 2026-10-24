"use strict";
// ブラウザ操作の抑止は補助的なものです。公開ファイル自体は閲覧できます。
(() => {
  const guarded = new WeakSet();
  const watchedFrames = new WeakSet();

  function install(target) {
    if (!target || guarded.has(target)) return;
    guarded.add(target);
    target.addEventListener('contextmenu', event => event.preventDefault(), {capture:true});
    target.addEventListener('keydown', event => {
      const key = String(event.key).toLowerCase();
      const ctrl = event.ctrlKey && !event.metaKey;
      const mac = event.metaKey && !event.ctrlKey;
      const devtools = (ctrl && event.shiftKey && ['i','j','c'].includes(key)) ||
        (mac && event.altKey && ['i','j','c'].includes(key));
      const source = (ctrl || mac) && key === 'u';
      if (key === 'f12' || devtools || source) event.preventDefault();
    }, {capture:true});
  }

  function watchFrame(frame) {
    if (watchedFrames.has(frame)) return;
    watchedFrames.add(frame);
    const installInFrame = () => {
      try { install(frame.contentDocument); }
      catch { /* 別オリジンの枠には親ページからアクセスできない */ }
    };
    frame.addEventListener('load', installInFrame);
    installInFrame();
  }

  install(document);
  document.querySelectorAll('iframe').forEach(watchFrame);
  new MutationObserver(records => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        if (node.matches('iframe')) watchFrame(node);
        node.querySelectorAll('iframe').forEach(watchFrame);
      }
    }
  }).observe(document, {childList:true,subtree:true});
})();
