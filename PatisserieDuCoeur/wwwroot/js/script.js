import { initSlider } from "./slider.js";
import { initCanvas } from "./canvas.js";
import { initTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  // Slayt gösterileri
  initSlider(".slide", 4000);
  initSlider(".review-slide", 3000);

  // Canvas animasyonu
  initCanvas("backgroundCanvas", "images/pasta-icon.svg");

  // Tema değiştirme
  initTheme("theme-switch");
});
