const $ = (selector) => document.querySelector(selector);

const activeMenu = $("#hamburguer");
const divActive = $(".wrapper-menu");

activeMenu.addEventListener("click", () => {
  divActive.classList.toggle("activarMenu");
});
