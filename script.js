// mobile menu
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");

const openMenu = () => {
  menu.style.display = "block";
  hamburger.style.display = "none";
  cross.style.display = "block";
};

const closeMenu = () => {
  menu.style.display = "none";
  hamburger.style.display = "block";
  cross.style.display = "none";
};
