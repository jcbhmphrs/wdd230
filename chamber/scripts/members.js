const contentContainer = document.querySelector('.grid-mode');
const directory = 'data/members.json';

async function getDirectory(viewType) {
    try {
        const response = await fetch(directory);
        if (response.ok) {
          const data = await response.json(); 
          viewType(data); 
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
};
getDirectory(displayGridMembers);

function displayGridMembers(data) {
    data.companies.forEach((element) => {
        let member = document.createElement('section');
        let companyName = document.createElement('h2');
        let address = document.createElement('ul');
        let street = document.createElement('li');
        let city = document.createElement('li');
        let phone = document.createElement('li');
        let url = document.createElement('li');
        let membership = document.createElement('li');        
        let logo = document.createElement('img');

        url.textContent = element.website;
        phone.textContent = `Phone Number : ${element.phone}`
        companyName.textContent = element.name; 
        street.textContent = element.address[0].street;
        city.textContent = `${element.address[0].city}, ${element.address[0].state}
         ${element.address[0].zip}`;
        membership.textContent = `Membership: ${element.membership}`;
        logo.setAttribute('src', element.image);
        logo.setAttribute('alt', element.name);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '50%');
        logo.setAttribute('height', 'auto');

        member.appendChild(companyName);
        member.appendChild(logo);
        address.appendChild(street);
        address.appendChild(city);
        address.appendChild(phone);
        address.appendChild(url);
        address.appendChild(membership);
        member.appendChild(address);
        contentContainer.appendChild(member);
    });
}

function displayListMembers(data) {
    data.companies.forEach((element) => {
        let member = document.createElement('section');
        let companyName = document.createElement('h2');
        let street = document.createElement('p');
        let city = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');
        let membership = document.createElement('p');       

        url.textContent = element.website;
        phone.textContent = `Number : ${element.phone}`
        companyName.textContent = element.name; 
        street.textContent = element.address[0].street;
        city.textContent = `${element.address[0].city}, ${element.address[0].state} ${element.address[0].zip}`;
        membership.textContent = `Membership: ${element.membership}`;


        member.appendChild(companyName);
        member.appendChild(street);
        member.appendChild(city);
        member.appendChild(phone);
        member.appendChild(url);
        member.appendChild(membership);
        // member.style.color = 'black'
        contentContainer.appendChild(member);
    });
};

const gridListButton = document.querySelector("#grid-list-button");
const directoryContent = document.querySelector(".grid-mode");


gridListButton.addEventListener("click", () => {
    directoryContent.classList.toggle("list-mode");
    directoryContent.classList.toggle("grid-mode");
    contentContainer.innerHTML = '';
    if(directoryContent.classList.value == "list-mode") {
        getDirectory(displayListMembers);
    } else {
        getDirectory(displayGridMembers);
    };
});