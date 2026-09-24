// ===============================
// THEME TOGGLE
// ===============================

const themeButton = document.querySelector(".theme-toggle");

// 🔴 NEW: Load saved theme when the page opens
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeButton.textContent = "☀";
} else {
  // 🔴 NEW: Dark is the default theme
  document.body.classList.remove("light");
  themeButton.textContent = "☾";
}


// Existing theme toggle function
function toggleTheme() {

  document.body.classList.toggle("light");

  const isLightTheme =
    document.body.classList.contains("light");

  localStorage.setItem(
    "theme",
    isLightTheme ? "light" : "dark"
  );

  themeButton.textContent =
    isLightTheme ? "☀" : "☾";
}


// ===============================
// NAVIGATION
// ===============================

const navLinks = document.querySelector(".nav-links");

const menuButton = document.createElement("button");
menuButton.classList.add("menu-btn");
menuButton.textContent = "☰";

document.querySelector(".navbar").appendChild(menuButton);

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }

      });

    },
    {
      threshold: 0.15
    }
  );

revealElements.forEach(element => {
  revealObserver.observe(element);
});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

const sectionObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navItems.forEach(link => {
            link.classList.remove("active");
          });

          const activeLink =
            document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );

          if (activeLink) {
            activeLink.classList.add("active");
          }

        }

      });

    },
    {
      threshold: 0.4
    }
  );

sections.forEach(section => {
  sectionObserver.observe(section);
});