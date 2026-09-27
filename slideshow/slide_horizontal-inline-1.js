const slideContainer = document.getElementById('slideContainer');
  const totalSlides = slideContainer.children.length;
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    slideContainer.style.transform = `translateX(-${currentIndex * 800}px)`;
  }, 3000); // 3秒ごとにスライド
