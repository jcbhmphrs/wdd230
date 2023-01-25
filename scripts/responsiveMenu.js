const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
var closeMenu = true;

menubutton.addEventListener("click", () => {
	if (closeMenu) {
		menubutton.src = 'images/icons-reso/close-menu-icon.png';
		closeMenu = false;
	} else {
		menubutton.src = 'images/icons-reso/menu-icon.png';
		closeMenu = true;
	}
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});



//========================   responsive  ===========================


titleCard = document.querySelector('.hero-title')

function reName() {
	var w = window.innerWidth;
	if (w <= 400) {
		titleCard.textContent = 'Kyiv Temple'; 
	} else if (w <= 960) {
		titleCard.textContent = 'Helsinki Temple';
	} else {
		titleCard.textContent = 'Brigham City Temple';
	}
};
window.onresize = reName;
reName();

//=============================  Rating Bar  ===============================
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

