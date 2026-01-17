document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".hero img");
  if (!heroImg) return;

  heroImg.setAttribute("draggable", "false");

  heroImg.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
});