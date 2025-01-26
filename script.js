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