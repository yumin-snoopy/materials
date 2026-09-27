const slides = document.querySelectorAll('.flip-slide');
  let currentIndex = 0;

  setInterval(() => {
    // 現在のスライドを非表示にし、裏向きに
    slides[currentIndex].classList.remove('active');

    // 次のスライドのインデックスを取得
    currentIndex = (currentIndex + 1) % slides.length;

    // 次のスライドを表示（回転して表向きに）
    slides[currentIndex].classList.add('active');
  }, 4000); // 4秒ごとにフリップ切り替え
