const slider = document.getElementById("slider");
const slides = slider.querySelectorAll("img");
const totalSlides = slides.length;
let index = 0;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// Auto slide every 3 seconds
let interval = setInterval(nextSlide, 3000);

// Pause auto-slide on hover
slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener(
  "mouseleave",
  () => (interval = setInterval(nextSlide, 3000))
);
