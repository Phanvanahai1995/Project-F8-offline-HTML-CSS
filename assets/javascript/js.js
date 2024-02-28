// hide navbar

const navbar = document.querySelector(".navbar");
const listIcon = document.querySelector(".header-icon__list");
const overlay = document.querySelector(".header-overlay");

listIcon.addEventListener("click", function () {
  navbar.classList.add("navbar-hide");
  overlay.style.display = "block";
});

overlay.addEventListener("click", function () {
  navbar.classList.remove("navbar-hide");
  overlay.style.display = "none";
});
