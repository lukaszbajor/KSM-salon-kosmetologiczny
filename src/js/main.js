const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__list");

const allMenuItems = document.querySelectorAll(".nav__link");
const allBars = document.querySelectorAll(".page__bar");
const allArrows = document.querySelectorAll(".fa-angle-down");

const footerYear = document.querySelector(".footer__year");

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
			bar.classList.remove("page__bar--openBar");
		});
		document.querySelectorAll(".page__bar").forEach((item) => {
			item.classList.remove("page__bar--openBar");
		});
		document.querySelectorAll(".fa-angle-down").forEach((item) => {
			item.classList.remove("fa-angle-down--active");
		});

		if (!isOpen) {
			answer.classList.add("page__answer--open");
			bar.classList.add("page__bar--openBar");
			bar.children[1].classList.add("fa-angle-down--active");
		}
	});
});

const currentYear = function () {
	const year = new Date().getFullYear();
	footerYear.textContent = year + " ";
};
currentYear();
