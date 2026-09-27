const slides = document.querySelectorAll('.card-slide');
  const animationTime = 800;
  let current = 0;

  function showNextSlide() {
    const previous = current;
    current = (current + 1) % slides.length;

    slides[previous].classList.add('leaving');
    slides[current].classList.add('active');

    setTimeout(() => {
      slides[previous].classList.remove('active', 'leaving');
    }, animationTime);
  }

  setInterval(showNextSlide, 4000); // 4秒ごとに切り替え
