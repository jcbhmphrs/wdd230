const spotOne = document.querySelector('#spotlight-one');
const spotTwo = document.querySelector('#spotlight-two');
const spotThree = document.querySelector('#spotlight-three');
const directory = './data/members.json'
const spotlights = []
async function getSpotlight() {
    try {
        const response = await fetch(directory);
        if (response.ok) {
          const data = await response.json();  
          data.companies.forEach(company => {
            if (company.membership == 'Gold' || company.membership == 'Silver') {
              spotlights.push(company);  
            }
          });
          getThree();
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
};
getSpotlight();

function getThree() {
  while (spotlights.length > 3) {
    spotlights.splice(Math.floor(Math.random()*spotlights.length), 1)
  };
  spotOne.textContent = spotlights[0].name;
  spotTwo.textContent = spotlights[1].name;
  spotThree.textContent = spotlights[2].name;
  spotOne.classList.add("t-on-color-bg");
  spotTwo.classList.add("t-on-color-bg");
  spotThree.classList.add("t-on-color-bg");
};