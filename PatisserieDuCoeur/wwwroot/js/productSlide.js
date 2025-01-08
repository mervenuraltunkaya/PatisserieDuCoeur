let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const productSlider = document.getElementById("product-slider");

      // Ürünleri dinamik olarak ekleyelim
      data.products.forEach((product) => {
        productSlider.innerHTML += `
          <div class="product">
            <div class="product-image-container">
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <div class="product-details">
                <p class="ingredients">${product.ingredients}</p>
              </div>
            </div>
            <div class="product-name">${product.name}</div>
          </div>
        `;
      });
    })
    .catch((error) =>
      console.error("Veri yüklenirken bir hata oluştu:", error)
    );
});

function prevSlide() {
  const productSlider = document.getElementById("product-slider");
  const totalSlides = document.querySelectorAll(".product").length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition(productSlider);
}

function nextSlide() {
  const productSlider = document.getElementById("product-slider");
  const totalSlides = document.querySelectorAll(".product").length;
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition(productSlider);
}

function updateSliderPosition(slider) {
  const width = slider.querySelector(".product").offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * width}px)`;
}
