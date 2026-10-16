const sourceButton = document.querySelector('[data-source-toggle]');
const sourcePanel = document.getElementById('sourcePanel');
const sourceCode = document.getElementById('sourceCode');

let sourceLoaded = false;

async function loadPageSource() {
  if (window.location.protocol === 'file:') {
    return `<!DOCTYPE html>\n${document.documentElement.outerHTML}`;
  }

  const sourceUrl = new URL(window.location.href);
  sourceUrl.search = '';
  sourceUrl.hash = '';

  const response = await fetch(sourceUrl, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`ソースを取得できませんでした（${response.status}）`);
  }

  return response.text();
}

sourceButton.addEventListener('click', async () => {
  const willOpen = sourcePanel.hidden;
  sourcePanel.hidden = !willOpen;
  sourceButton.setAttribute('aria-expanded', String(willOpen));

  if (!willOpen) {
    sourceButton.textContent = 'ソースを表示';
    return;
  }

  sourceButton.textContent = 'ソースを閉じる';

  if (!sourceLoaded) {
    sourceButton.disabled = true;
    sourceCode.textContent = 'ソースを読み込んでいます...';

    try {
      sourceCode.textContent = await loadPageSource();
      sourceLoaded = true;
    } catch (error) {
      sourceCode.textContent = `<!DOCTYPE html>\n${document.documentElement.outerHTML}`;
    } finally {
      sourceButton.disabled = false;
    }
  }

  sourcePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
