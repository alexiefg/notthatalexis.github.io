document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".mobile-nav");

  button.addEventListener("click", function () {
    nav.style.display =
      nav.style.display === "block" ? "none" : "block";
  });
});
