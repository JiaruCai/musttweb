// Hero Image Slider
document.addEventListener("DOMContentLoaded", function () {
  let heroIndex = 0;
  const heroSlides = document.querySelector(".hero-slider .slides");
  const heroSlideItems = document.querySelectorAll(".hero-slider .slides img");
  const slideWidth = heroSlideItems[0].clientWidth;

  if (heroSlides && heroSlideItems.length > 0) {
      // Clone all images for a seamless loop
      heroSlides.innerHTML += heroSlides.innerHTML;
      const totalSlides = document.querySelectorAll(".hero-slider .slides img").length;

      setInterval(() => {
          heroIndex++;
          heroSlides.style.transition = "transform 0.5s ease-in-out";
          heroSlides.style.transform = `translateX(-${heroIndex * slideWidth}px)`;

          // Reset when reaching the duplicated set
          if (heroIndex === heroSlideItems.length) {
              setTimeout(() => {
                  heroSlides.style.transition = "none";
                  heroSlides.style.transform = "translateX(0)";
                  heroIndex = 0;
              }, 500); // Match this to transition duration
          }
      }, 2000); // Adjust speed as needed
  }
});





//Testimonials slider
let testimonialIndex = 0;
const testimonials = document.querySelector(".testimonials");
const testimonialItems = Array.from(document.querySelectorAll(".testimonials > *"));

if (testimonials && testimonialItems.length > 0) {
  // Clone the first and last testimonials
  const firstTestimonialClone = testimonialItems[0].cloneNode(true);
  const lastTestimonialClone = testimonialItems[testimonialItems.length - 1].cloneNode(true);

  // Append and prepend clones
  testimonials.appendChild(firstTestimonialClone);
  testimonials.insertBefore(lastTestimonialClone, testimonialItems[0]);

  // Update the container to show the "first" testimonial
  testimonials.style.transform = "translateX(-100%)";

  const transitionDuration = 500; // In milliseconds
  const intervalDuration = 1000; // In milliseconds
  const testimonialWidthPercentage = 33.33; // Adjust to your layout (e.g., 33.33% for 3 testimonials per view)

  setInterval(() => {
    testimonialIndex++;

    testimonials.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    testimonials.style.transform = `translateX(-${(testimonialIndex + 1) * testimonialWidthPercentage}%)`; //maybe remove +1

    // Reset position when reaching the cloned first testimonial
    if (testimonialIndex >= testimonialItems.length) {
      setTimeout(() => {
        testimonials.style.transition = "none"; // Disable transition for instant reset
        testimonials.style.transform = `translateX(-${testimonialWidthPercentage}%)`; //maybe change to `translateX(-${testimonialIndex * 33.33}%)`
        testimonialIndex = 0;
      }, transitionDuration);
    }
  }, intervalDuration);
}


// Function to switch slides
function showSlide(slideNumber) {
  // Hide all slides
  document.querySelectorAll(".feature-slide-container").forEach((slide) => {
      slide.style.display = "none";
  });

  // Show the selected slide
  let activeSlide = document.getElementById("slide" + slideNumber);
  if (activeSlide) {
      activeSlide.style.display = "flex"; // Ensure it's visible
  }

  // Update button styles
  document.querySelectorAll(".circle-button").forEach((btn, index) => {
      btn.classList.toggle("selected", index === slideNumber - 1);
  });
}

// Automatically rotate slides every 5 seconds
let currentSlide = 1;
setInterval(() => {
  currentSlide = (currentSlide % 3) + 1;
  showSlide(currentSlide);
}, 5000);

// Ensure Slide 1 loads correctly when the page opens
document.addEventListener("DOMContentLoaded", () => {
  showSlide(1);
});




// buy me a coffee
document.addEventListener("DOMContentLoaded", function () {
  let coffeeSection = document.getElementById("buy-me-a-coffee");
  coffeeSection.style.opacity = "0";
  coffeeSection.style.transition = "opacity 1s ease-in-out";

  setTimeout(() => {
      coffeeSection.style.opacity = "1";
  }, 500);
});

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