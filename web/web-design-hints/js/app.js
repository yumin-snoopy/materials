const copyButtons = document.querySelectorAll('[data-copy]');
const explanationDialog = document.querySelector('#css-explanation-dialog');
const explanationTitle = document.querySelector('#explanation-title');
const explanationContent = document.querySelector('#explanation-content');
document.querySelectorAll('.explain-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const explanation = document.getElementById(button.dataset.explain);
    if (!explanation) return;
    const label = button.closest('.codebox').querySelector('.code-top span').textContent;
    explanationTitle.textContent = label + 'の説明';
    explanationContent.replaceChildren(explanation.querySelector('dl').cloneNode(true));
    explanationDialog.showModal();
  });
});
explanationDialog.querySelector('.dialog-close').addEventListener('click', () => explanationDialog.close());
explanationDialog.addEventListener('click', (event) => {
  if (event.target === explanationDialog) explanationDialog.close();
});
copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const code = document.querySelector('#' + button.dataset.copy + ' code');
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = 'コピーしました';
      window.setTimeout(() => { button.textContent = 'コピー'; }, 1800);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      const copied = document.execCommand('copy');
      button.textContent = copied ? 'コピーしました' : '選択してコピー';
      if (copied) {
        selection.removeAllRanges();
        window.setTimeout(() => { button.textContent = 'コピー'; }, 1800);
      }
    }
  });
});
const scaleRange = document.querySelector('#scale-range');
const scaleHeading = document.querySelector('#scale-heading');
const scaleOutput = document.querySelector('#scale-output');
const scaleRatio = document.querySelector('#scale-ratio');
const scaleCode = document.querySelector('#scale-code code');
scaleRange.addEventListener('input', () => {
  const size = Number(scaleRange.value);
  scaleHeading.style.fontSize = size + 'px';
  scaleOutput.textContent = size + 'px';
  scaleRatio.textContent = (size / 16).toFixed(1) + '倍';
  scaleCode.textContent = 'h2 { font-size: ' + size + 'px; }\np  { font-size: 16px; }';
});
const navLinks = document.querySelectorAll('.sidebar nav a');
const sections = [...navLinks].map((link) => document.querySelector(link.hash)).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle('is-current', link.hash === '#' + visible.target.id));
  }, { rootMargin: '-15% 0px -72% 0px' });
  sections.forEach((section) => observer.observe(section));
}
