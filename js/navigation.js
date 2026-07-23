/*
  Navigation module
  Purpose: Fixed header state, mobile drawer controls, outside click handling,
  ESC close support, body scroll lock, and active link highlighting.
*/

const header = document.querySelector("#siteHeader");
const menuToggle = document.querySelector("#menuToggle");
const menuClose = document.querySelector("#menuClose");
const mobileMenu = document.querySelector("#mobileMenu");
const menuOverlay = document.querySelector("#menuOverlay");
const navLinks = document.querySelectorAll(".desktop-nav a, .mobile-menu__nav a");
let lastFocusedElement = null;

function setHeaderState() {
  header?.classList.toggle("is-shrunk", window.scrollY > 24);
}

function openMenu() {
  lastFocusedElement = document.activeElement;
  document.body.classList.add("menu-open");
  mobileMenu?.classList.add("is-open");
  menuOverlay.hidden = false;
  requestAnimationFrame(() => menuOverlay.classList.add("is-visible"));
  menuToggle?.setAttribute("aria-expanded", "true");
  mobileMenu?.setAttribute("aria-hidden", "false");
  menuClose?.focus();
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  mobileMenu?.classList.remove("is-open");
  menuOverlay?.classList.remove("is-visible");
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileMenu?.setAttribute("aria-hidden", "true");

  window.setTimeout(() => {
    if (menuOverlay) menuOverlay.hidden = true;
  }, 220);

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function updateActiveNavigation() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const current = sections
    .filter((section) => section.getBoundingClientRect().top <= 140)
    .pop();

  navLinks.forEach((link) => {
    const isActive = current && link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", Boolean(isActive));
  });
}

menuToggle?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", closeMenu);
menuOverlay?.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu?.classList.contains("is-open")) closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu?.classList.contains("is-open")) {
    closeMenu();
  }
});

window.addEventListener("scroll", () => {
  setHeaderState();
  updateActiveNavigation();
}, { passive: true });

setHeaderState();
updateActiveNavigation();
