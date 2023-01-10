const darkModeButton = document.querySelector('#darkModeIcon');
let lightMode = true;
const bodyElement = document.querySelector('body');
const cards = document.querySelectorAll('.card');
const darkText = document.querySelectorAll('a, p, h2');
const menuItems = document.querySelectorAll('.menuListItem')


darkModeButton.addEventListener("click", () => {
	if (lightMode) {
		menuItems.forEach((item) => item.classList.toggle('darkMenu'));
		bodyElement.classList.toggle('darkBody');
        darkText.forEach((item) => item.classList.toggle("darkChar"));
        cards.forEach((item) => item.classList.toggle("darkCard"));
		lightMode = false;
	} else if (!lightMode) {
		menuItems.forEach((item) => item.classList.toggle('darkMenu'));
		bodyElement.classList.toggle('darkBody');
        darkText.forEach((item) => item.classList.toggle("darkChar"));
        cards.forEach((item) => item.classList.toggle("darkCard"));
        lightMode = true;
	}
});
