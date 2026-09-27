const slides = document.querySelectorAll('.slide');
  let current = 0;

  setInterval(() => {
    // 現在のスライドを非表示に
    slides[current].classList.remove('active');

    // 次のスライド番号を取得
    current = (current + 1) % slides.length;

    // 次のスライドを表示にする
    slides[current].classList.add('active');
  }, 4000); // 4秒ごとに切り替え
