"use strict";
const fontSize = document.getElementById("font-size");
if (fontSize) fontSize.addEventListener("change", () => { document.body.style.fontSize = fontSize.value + "px"; });
const fullscreen = document.getElementById("fullscreen");
if (fullscreen) {
 if (!document.fullscreenEnabled) fullscreen.hidden = true;
 fullscreen.addEventListener("click", async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
  catch { fullscreen.textContent = "ブラウザのF11で全画面表示"; }
 });
 document.addEventListener("fullscreenchange", () => { fullscreen.textContent = document.fullscreenElement ? "全画面を終了" : "全画面表示"; });
}
