export function initSlider(selector, interval = 5000) {
  const slides = document.querySelectorAll(selector);
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  setInterval(showNextSlide, interval);
}
