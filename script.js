/* =====================================================
   THEME
===================================================== */

const themeButton = document.querySelector(".theme-btn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeButton.textContent = "☀";
} else {
  themeButton.textContent = "☾";
}


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


/* =====================================================
   MOBILE MENU
===================================================== */

const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");

const menuButton = document.createElement("button");

menuButton.className = "menu-btn";
menuButton.type = "button";
menuButton.setAttribute(
  "aria-label",
  "Toggle navigation menu"
);

menuButton.textContent = "☰";

navActions.insertBefore(
  menuButton,
  themeButton
);


menuButton.addEventListener("click", () => {

  const isOpen =
    navLinks.classList.toggle("open");

  menuButton.textContent =
    isOpen ? "×" : "☰";

});


/* Close mobile menu after clicking a link */

navLinks.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

    menuButton.textContent = "☰";

  });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
  ".section, .project-card, .skill-card, .experience"
);


const observer = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("reveal");

      requestAnimationFrame(() => {
        entry.target.classList.add("show");
      });

      observer.unobserve(entry.target);
    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {
  observer.observe(element);
});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll(
  "section[id]"
);


const navigationLinks = document.querySelectorAll(
  ".nav-links a"
);


const sectionObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      navigationLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink =
        document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );

      if (activeLink) {
        activeLink.classList.add("active");
      }

    });

  },
  {
    threshold: 0.4
  }
);


sections.forEach((section) => {
  sectionObserver.observe(section);
});