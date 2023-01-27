const visitsElement = document.querySelector("#pageVisit");
let visitCount = Number(window.localStorage.getItem("visit-count"));
visitsElement.textContent = `Visit Count: ${visitCount}`;
visitCount++;
localStorage.setItem("visit-count", visitCount);

// ______________________form________________________




let formName = document.getElementById('form-name');
formName.addEventListener('change', () => {	
	let name = document.getElementById('form-name').value;
	let tableName = document.getElementById('table-name');
	tableName.textContent = name; 
});
let formEmail = document.getElementById('form-email');
formEmail.addEventListener('change', () => {	
	let email = document.getElementById('form-email').value;
	let tableEmail = document.getElementById('table-email');
	tableEmail.textContent = email; 
});
let formUsername = document.getElementById('form-username');
formUsername.addEventListener('change', () => {	
	let username = document.getElementById('form-username').value;
	let tableUsername = document.getElementById('table-username');
	tableUsername.textContent = username; 
});
let formRating = document.getElementById('form-rating');
formRating.addEventListener('change', () => {	
	let rating = document.getElementById('form-rating').value;
	let tableRating = document.getElementById('table-rating');
	tableRating.textContent = rating; 
});


let submit = document.querySelector('.submitButton');
submit.addEventListener('click', () => {
	let table = document.getElementById('table');
	table.style.display = 'block';
});