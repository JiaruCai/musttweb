// Hero Image Slider
let heroIndex = 0;
const heroSlides = document.querySelector(".hero-slider .slides");
if (heroSlides) {
  setInterval(() => {
    heroIndex = (heroIndex + 1) % 4; // Adjust for the number of images
    heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;
  }, 2000);
}

// Testimonials Slider
let testimonialIndex = 0;
const testimonials = document.querySelector(".testimonials");
if (testimonials) {
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.children.length;
    testimonials.style.transform = `translateX(-${testimonialIndex * 33.33}%)`; // Adjust width for responsiveness
  }, 2000);
}

// Mobile Features Slider
let mobileIndex = 0;
const mobileSlides = document.querySelector(".mobile-slider .slides");
if (mobileSlides) {
  setInterval(() => {
    mobileIndex = (mobileIndex + 1) % 3; // Adjust for the number of images
    mobileSlides.style.transform = `translateX(-${mobileIndex * 100}%)`;
  }, 5000);
}
