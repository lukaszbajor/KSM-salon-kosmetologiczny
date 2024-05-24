const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__list");

const allMenuItems = document.querySelectorAll(".nav__item");

const menuBurger = () => {
	burger.classList.toggle("nav__burger--active");
	menu.classList.toggle("nav__list--showMenu");
};

allMenuItems.forEach((item) => {
	item.addEventListener("click", () => {
		burger.classList.toggle("nav__burger--active");
		menu.classList.toggle("nav__list--showMenu");
	});
});

burger.addEventListener("click", menuBurger);
