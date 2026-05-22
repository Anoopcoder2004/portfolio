/* ===============================
   SMOOTH SCROLL
================================= */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* ===============================
   THEME TOGGLE (FIXED)
================================= */
const themeBtn = document.querySelector(".theme-btn");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀️";
} else {
  themeBtn.textContent = "🌙";
}

function toggleTheme() {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

/* ===============================
   SCROLL ANIMATION (IMPROVED)
================================= */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".card, .section").forEach((el) => {
  el.classList.add("hidden"); // initial hidden state
  observer.observe(el);
});