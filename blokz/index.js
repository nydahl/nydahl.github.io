let openButton = document.getElementById("open");
let navBar = document.getElementById("navcontainer").querySelector("nav");
let navOpen = false;

openButton.addEventListener("click", () => {
  navOpen = !navOpen;
  navBar.classList.toggle("active");
  openButton.src = navOpen ? "img/icon-close.svg" : "img/icon-hamburger.svg";
});
