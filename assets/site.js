document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Discourage saving the hero image (casual deterrent)
  const heroImg = document.querySelector(".hero img");
  if (heroImg) {
    heroImg.setAttribute("draggable", "false");
    heroImg.addEventListener("contextmenu", (e) => e.preventDefault());
  }
});