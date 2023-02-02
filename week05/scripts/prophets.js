const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

let results = null;

async function getProphetInfo(url) {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.table(data);
        showProphets(data.prophets);   
    };
}

function suffix(order) {
    let orderSuffix;
    switch (order) {
        case 1:
            orderSuffix = 'st';
            break;
        case 2:
            orderSuffix = 'nd';
            break;
        case 3:
            orderSuffix = 'rd';
            break;
        default :
            orderSuffix = 'th';
            break;
    }
    return orderSuffix;
}

const showProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const portrait = document.createElement("img");
        const pob = document.createElement("p");
        const dob = document.createElement("p");
        const fullName = document.createElement("h2");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        card.appendChild(fullName);
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        card.appendChild(dob);
        pob.textContent =  `Place of Birth: ${prophet.birthplace}`;
        card.appendChild(pob);
        portrait.setAttribute("src", prophet.imageurl);
        card.appendChild(portrait);
        portrait.setAttribute("alt", `The Prophet ${prophet.name} ${prophet.lastname}. ${prophet.order}${suffix(prophet.order)} Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");    
        cards.appendChild(card);
    });
}

getProphetInfo(url);