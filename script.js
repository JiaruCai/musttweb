// Hero Image Slider
let heroIndex = 0;
const heroSlides = document.querySelector(".hero-slider .slides");
const heroSlideItems = document.querySelectorAll(".hero-slider .slides > *");

if (heroSlides && heroSlideItems.length > 0) {
  // Clone the first slide and append it to the end for a seamless loop
  const firstSlideClone = heroSlideItems[0].cloneNode(true);
  heroSlides.appendChild(firstSlideClone);

  setInterval(() => {
    heroIndex++;
    heroSlides.style.transition = "transform 0.5s ease-in-out";
    heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;

    // Reset to the first slide instantly when the transition reaches the clone
    if (heroIndex === heroSlideItems.length) {
      setTimeout(() => {
        heroSlides.style.transition = "none";
        heroSlides.style.transform = "translateX(0)";
        heroIndex = 0;
      }, 500); // Match this to the transition duration
    }
  }, 2000); // Adjust the interval duration as needed
}


// Testimonials Slider
let testimonialIndex = 0;
const testimonials = document.querySelector(".testimonials");
const testimonialItems = document.querySelectorAll(".testimonials > *");

if (testimonials && testimonialItems.length > 0) {
  // Clone the first testimonial and append it to the end
  const firstTestimonialClone = testimonialItems[0].cloneNode(true);
  testimonials.appendChild(firstTestimonialClone);

  setInterval(() => {
    testimonialIndex++;
    testimonials.style.transition = "transform 1s ease-in-out"; // Adjusted transition duration
    testimonials.style.transform = `translateX(-${testimonialIndex * 33.33}%)`; // Adjust width for testimonials

    // Reset to the first testimonial instantly when the transition reaches the clone
    if (testimonialIndex === testimonialItems.length) {
      setTimeout(() => {
        testimonials.style.transition = "none";
        testimonials.style.transform = "translateX(0)";
        testimonialIndex = 0;
      }, 1000); // Match this to the transition duration (1 second here)
    }
  }, 4000); // Interval time doubled from 2000ms to 4000ms
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

// Gender button 
document.querySelectorAll(".gender-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      document.querySelectorAll(".gender-btn").forEach((b) => b.classList.remove("active"));
  
      // Add active class to the clicked button
      this.classList.add("active");
  
      // Update the hidden input value
      document.getElementById("gender-input").value = this.dataset.value;
    });
  });



  
  