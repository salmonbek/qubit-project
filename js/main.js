const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close-btn");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", () => {
  navbar.classList.add("active");
});

closeButton.addEventListener("click", () => {
  navbar.classList.remove("active");
});
