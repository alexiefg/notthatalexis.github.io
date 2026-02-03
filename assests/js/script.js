document.addEventListener("DOMContentLoaded", function () {
  console.log("menu script loaded");

  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".mobile-nav");

  if (!button || !nav) return;

  button.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});
