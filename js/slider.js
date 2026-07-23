/*
  Testimonial slider module
  Purpose: Vanilla carousel with autoplay, manual controls, and pause on hover/focus.
  Logic: Maintain an active index and translate the flex track by 100% per slide.
*/

const testimonialTrack = document.querySelector("#testimonialTrack");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialPrev = document.querySelector("#testimonialPrev");
const testimonialNext = document.querySelector("#testimonialNext");
const testimonialSlider = document.querySelector(".testimonial-slider");
let testimonialIndex = 0;
let testimonialTimer = null;

function showTestimonial(index) {
  if (!testimonialTrack || testimonialCards.length === 0) return;
  testimonialIndex = (index + testimonialCards.length) % testimonialCards.length;
  testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
}

function startTestimonialAutoplay() {
  stopTestimonialAutoplay();
  testimonialTimer = window.setInterval(() => {
    showTestimonial(testimonialIndex + 1);
  }, 5200);
}

function stopTestimonialAutoplay() {
  if (testimonialTimer) {
    window.clearInterval(testimonialTimer);
    testimonialTimer = null;
  }
}

testimonialPrev?.addEventListener("click", () => {
  showTestimonial(testimonialIndex - 1);
  startTestimonialAutoplay();
});

testimonialNext?.addEventListener("click", () => {
  showTestimonial(testimonialIndex + 1);
  startTestimonialAutoplay();
});

testimonialSlider?.addEventListener("mouseenter", stopTestimonialAutoplay);
testimonialSlider?.addEventListener("mouseleave", startTestimonialAutoplay);
testimonialSlider?.addEventListener("focusin", stopTestimonialAutoplay);
testimonialSlider?.addEventListener("focusout", startTestimonialAutoplay);

showTestimonial(0);
startTestimonialAutoplay();
