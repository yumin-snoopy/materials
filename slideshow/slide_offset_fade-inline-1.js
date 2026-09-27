const slides = document.querySelectorAll('.slide');
  let current = 0;

  setInterval(() => {
    // 今のスライドを非表示に
    slides[current].classList.remove('active');

    // 次のスライドのインデックスを取得
    current = (current + 1) % slides.length;

    // 次のスライドを表示
    slides[current].classList.add('active');
  }, 4000); // 4秒ごとに切り替え
