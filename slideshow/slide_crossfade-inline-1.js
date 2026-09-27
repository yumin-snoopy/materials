const slides = document.querySelectorAll('.fade-slide');
  let current = 0;

  setInterval(() => {
    // 現在の画像を非表示に
    slides[current].classList.remove('active');

    // 次の画像のインデックスを計算
    current = (current + 1) % slides.length;

    // 次の画像を表示
    slides[current].classList.add('active');
  }, 4000); // 4秒ごとに切り替え
