let slideIndex = 0;
  let slideshowInterval;

  function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => (slide.style.display = 'none'));

    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }

    slides[slideIndex].style.display = 'block';
  }

  function startStopSlideshow() {
    const btnStartStop = document.getElementById('btnStartStop');

    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      slideshowInterval = null;
      btnStartStop.textContent = 'Start';
    } else {
      slideshowInterval = setInterval(() => {
        showSlide(slideIndex + 1);
      }, 2000);
      btnStartStop.textContent = 'Stop';
    }
  }

  function nextSlide() {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    showSlide(slideIndex - 1);
  }

  startStopSlideshow();
