/*
  App module
  Purpose: Small shared enhancements that do not belong to navigation, slider,
  or scroll effects: ripple feedback, smooth anchor offset, and form handling.
*/

document.querySelectorAll(".ripple").forEach((button) => {
  button.addEventListener("click", (event) => {
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
    button.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
    button.classList.remove("is-rippling");
    void button.offsetWidth;
    button.classList.add("is-rippling");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    const offset = document.querySelector("#siteHeader")?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset + 1;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submit = form.querySelector('button[type="submit"]');
    const originalText = submit?.textContent;

    if (submit) {
      submit.textContent = "Sent";
      submit.disabled = true;
    }

    window.setTimeout(() => {
      form.reset();
      if (submit) {
        submit.textContent = originalText || "Submit";
        submit.disabled = false;
      }
    }, 1400);
  });
});
