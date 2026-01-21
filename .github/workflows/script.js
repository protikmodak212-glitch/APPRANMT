// Smooth scroll for buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerPoint = window.innerHeight - 100;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSection);
revealSection();

// Logo hover animation
const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", () => {
  logo.style.transform = "scale(1.1) rotate(2deg)";
});

logo.addEventListener("mouseout", () => {
  logo.style.transform = "scale(1) rotate(0deg)";
});
