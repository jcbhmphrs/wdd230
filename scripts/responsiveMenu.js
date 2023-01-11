const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
var closeMenu = true;

menubutton.addEventListener("click", () => {
	if (closeMenu) {
		menubutton.src = 'images/close-menu-icon.png';
		closeMenu = false;
	} else {
		menubutton.src = 'images/menu-icon.png';
		closeMenu = true;
	}
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});

