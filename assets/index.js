const hamburgerMenuButton = document.querySelector("#hamburgerMenuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuCancelButton = document.querySelector(
  "#mobileMenuCancelButton"
);

hamburgerMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileMenuCancelButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


