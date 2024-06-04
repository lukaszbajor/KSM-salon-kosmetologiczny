const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__list");

const allMenuItems = document.querySelectorAll(".nav__link");
const allBars = document.querySelectorAll(".page__bar");

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

allBars.forEach((bar) => {
	bar.addEventListener("click", () => {
		const answer = bar.nextElementSibling;
		const isOpen = answer.classList.contains("page__answer--open");

		document.querySelectorAll(".page__answer").forEach((item) => {
			item.classList.remove("page__answer--open");
			item.style.height = null;
		});

		if (!isOpen) {
			answer.classList.add("page__answer--open");
			// answer.style.height = answer.scrollHeight + "px";
		}
	});
});
