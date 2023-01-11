const menuButton = document.querySelector(".menu_but");
const navlink = document.querySelector(".navlink");
menuButton.addEventListener("click", () => {
  navlink.classList.toggle("Mobile_menu");
});
