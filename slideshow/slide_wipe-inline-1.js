const slides = document.querySelectorAll('.wipe-slide');
  const animationTime = 1200;
  let current = 0;
  let changing = false;

  function showNextSlide() {
    if (changing) return;

    changing = true;
    const next = (current + 1) % slides.length;
    slides[next].classList.add('entering');

    setTimeout(() => {
      slides[current].classList.remove('active');
      slides[next].classList.add('active');
      slides[next].classList.remove('entering');
      current = next;
      changing = false;
    }, animationTime);
  }

  setInterval(showNextSlide, 4000); // 4秒ごとに切り替え
