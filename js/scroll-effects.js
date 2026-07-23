/*
  Scroll effects module
  Purpose: Intersection Observer animation reveals, animated counters, image loaded
  states, parallax hero movement, and back-to-top visibility.
*/

const revealElements = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
const backToTop = document.querySelector("#backToTop");
const heroImage = document.querySelector(".hero__image");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealElements.forEach((element) => revealObserver.observe(element));

function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  const suffix = counter.dataset.suffix || "";
  const duration = 1600;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = `${Math.round(target * eased)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.55 });

counters.forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll("img").forEach((image) => {
  if (image.complete) {
    image.classList.add("is-loaded");
  } else {
    image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
  }
});

function updateScrollEffects() {
  const scrollY = window.scrollY;
  backToTop?.classList.toggle("is-visible", scrollY > 620);

  if (heroImage && scrollY < window.innerHeight) {
    heroImage.style.transform = `translateY(${scrollY * 0.16}px) scale(1.03)`;
  }
}

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateScrollEffects, { passive: true });
updateScrollEffects();
