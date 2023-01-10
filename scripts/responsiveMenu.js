const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
const darkModeButton = document.querySelector('#darkModeIcon');
let lightMode = true;
const bodyElement = document.querySelector('body');
const darkHREF = document.querySelectorAll('a');
const darkP = document.querySelectorAll('p');
const darkH2 = document.querySelector('h2');

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});

darkModeButton.addEventListener("click", () => {
	if (lightMode) {
		bodyElement.style.background = "#003c71";
        darkH2.style.color = '#ffb361';
        darkHREF.forEach((item) => item.classList.toggle("darkChar"));
        darkP.forEach((item) => item.classList.toggle("darkChar"));
		lightMode = false;
	} else if (!lightMode) {
		bodyElement.style.background = 'white';
        darkH2.style.color = '#001d2c';
        darkHREF.forEach((item) => item.classList.toggle("darkChar"));
        darkP.forEach((item) => item.classList.toggle("darkChar"));
        lightMode = true;
	}
});

