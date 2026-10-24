"use strict";
(() => {
  const items = window.cssDesignSamples || [];
  const categories = window.cssDesignCategories || [];
  const tags = ["シンプル", "ビジネス", "かわいい", "モダン", "やさしい", "落ち着いた"];
  const state = { category: "all", tag: "", query: "" };
  const $ = id => document.getElementById(id);
  const menu = $("categoryMenu");
  const tagFilters = $("tagFilters");
  const samples = $("samples");
  const safe = value => String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[character]);

  for (const [key, label] of [["all", "すべて"], ...categories]) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.category = key;
    button.addEventListener("click", () => {
      state.category = key;
      $("menuToggle").setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      render();
      $("main").scrollIntoView({block:"start", behavior:"smooth"});
    });
    menu.append(button);
  }
  for (const tag of tags) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "app-tag";
    button.textContent = tag;
    button.dataset.tag = tag;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => { state.tag = state.tag === tag ? "" : tag; render(); });
    tagFilters.append(button);
  }
  $("search").addEventListener("input", event => { state.query = event.target.value.trim().toLocaleLowerCase("ja"); render(); });
  $("menuToggle").addEventListener("click", () => {
    const opened = menu.classList.toggle("is-open");
    $("menuToggle").setAttribute("aria-expanded", String(opened));
    $("menuToggle").querySelector("span").textContent = opened ? "−" : "＋";
  });

  async function copy(text, button, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const field = document.createElement("textarea");
        field.value = text;
        field.setAttribute("readonly", "");
        field.style.cssText = "position:fixed;left:-9999px;top:0";
        document.body.append(field);
        field.select();
        if (!document.execCommand("copy")) throw new Error("copy failed");
        field.remove();
      }
      const feedback = button.parentElement.querySelector(".app-copy-feedback");
      feedback.textContent = `${label}をコピーしました`;
      $("copyStatus").textContent = `${label}をコピーしました`;
      clearTimeout(button.parentElement._feedbackTimer);
      button.parentElement._feedbackTimer = setTimeout(() => { feedback.textContent = ""; }, 3500);
    } catch {
      button.parentElement.querySelector(".app-copy-feedback").textContent = "コピーできませんでした。コードを表示して選択してください。";
    }
  }

  function render() {
    for (const button of menu.querySelectorAll("button")) button.setAttribute("aria-current", String(button.dataset.category === state.category));
    for (const button of tagFilters.querySelectorAll("button")) button.setAttribute("aria-pressed", String(button.dataset.tag === state.tag));
    const label = state.category === "all" ? "すべてのデザイン" : categories.find(([key]) => key === state.category)?.[1];
    $("currentCategory").textContent = label;
    const filtered = items.filter(item => {
      if (state.category !== "all" && item.category !== state.category) return false;
      if (state.tag && !item.tags.includes(state.tag)) return false;
      return !state.query || [item.title, item.description, item.categoryName, ...item.tags, ...item.keywords].join(" ").toLocaleLowerCase("ja").includes(state.query);
    });
    $("resultCount").textContent = `${filtered.length}件 / 全${items.length}件`;
    $("emptyState").hidden = filtered.length > 0;
    samples.replaceChildren();
    for (const item of filtered) {
      const card = document.createElement("article");
      card.className = "app-card";
      card.innerHTML = `<div class="app-card-header"><h3>${safe(item.title)}</h3><span class="app-card-meta">${safe(item.categoryName)} · ${safe(item.tags.join(" / "))}</span></div><p class="app-preview-label">完成見本</p><div class="app-preview"></div><p class="app-description">${safe(item.description)}</p><div class="app-actions"><button class="app-action app-action--primary" type="button" data-copy="css">CSSをコピー</button><button class="app-action" type="button" data-copy="html">HTMLをコピー</button><span class="app-copy-feedback" aria-live="polite"></span></div><details class="app-code-details"><summary>コードを見る</summary><div class="app-code-grid"><div class="app-code-block"><h4>HTML</h4><pre><code>${safe(item.html)}</code></pre></div><div class="app-code-block"><h4>CSS</h4><pre><code>${safe(item.css)}</code></pre></div></div></details>`;
      const preview = card.querySelector(".app-preview");
      const style = document.createElement("style");
      style.textContent = item.css;
      preview.append(style);
      preview.insertAdjacentHTML("beforeend", item.html);
      for (const button of card.querySelectorAll("[data-copy]")) {
        const kind = button.dataset.copy;
        button.addEventListener("click", () => copy(item[kind], button, kind === "css" ? "CSS" : "HTML"));
      }
      samples.append(card);
    }
  }
  render();
})();
