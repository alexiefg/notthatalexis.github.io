console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".mobile-nav");

  if (!button || !nav) return;

  button.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});
