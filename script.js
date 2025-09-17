// Typing animation
const roles = ["Frontend Developer", "Web Enthusiast", "Problem Solver"];
let roleIndex = 0, charIndex = 0, currentText = "", isDeleting = false;
const typingEl = document.getElementById("typing");

function typeEffect() {
  currentText = roles[roleIndex];
  typingEl.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();

// Fade-in on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Navbar active link
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
