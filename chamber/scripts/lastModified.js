document.getElementById('lastModified').innerHTML = `Last Modified ${document.lastModified}`;
const date = new Date();
document.getElementById('copyWrite').innerHTML = `&copy ${date.getFullYear()} Jacob Humphreys, Utah, USA`;


//Days since last visit 

// var dateOffset = (24*60*60*1000) * 5; //5 days
// var myDate = new Date();
// myDate.setTime(myDate.getTime() - dateOffset);
// localStorage.setItem('lastVisited', myDate);

let today = new Date();
let dayTracker = document.querySelector('#dayTracker');
let lastVisited = new Date(localStorage.getItem('lastVisited'));

if (lastVisited === null) {
    dayTracker.textContent = `This is your first visit!`;
} else {
    let msPassed = today.getTime() - lastVisited.getTime();
    let daysPassed = Math.floor(msPassed / 86400000);
    dayTracker.textContent = `Days Since Last Visit: ${daysPassed}`;
    
};

document.querySelector('#currentDate').textContent = `Today's Date : ${today.toLocaleString()}`;
localStorage.setItem('lastVisited', today);