
let today = new Date();
let dayTracker = document.querySelector('#dayTracker');
// let lastVisited = localStorage.getItem('lastVisited');
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