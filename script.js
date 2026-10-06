// Mobile menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("open");
    nav.classList.remove("open");
  })
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Active nav link
const links = [...nav.querySelectorAll("a")];
const sections = links.map((l) => document.querySelector(l.getAttribute("href")));
window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY + 140;
    let current = -1;
    sections.forEach((s, i) => { if (s && s.offsetTop <= y) current = i; });
    links.forEach((l, i) => l.classList.toggle("active", i === current));
  },
  { passive: true }
);

document.getElementById("year").textContent = new Date().getFullYear();
