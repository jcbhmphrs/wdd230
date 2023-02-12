const currentTemp = document.querySelector('#weather-element');
const lat = '41.779039';
const lon = '-111.795297';
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&APPID=0661a542273fa24290d2b34c31750d99`; 
const weatherElement = document.querySelector('#weather-element');
async function apiFetch() {
try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
} catch(error) {
    console.log(error);
}
};

apiFetch();
function displayResults(data) {
    const figure = document.createElement('figure');
    const weatherIcon = document.createElement('img');
    const captionDesc = document.createElement('figcaption');
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;
    
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;      
    currentTemp.innerHTML = `Current Temperature: <br>${data.list[0].main.temp}&deg;F`;   
    figure.appendChild(weatherIcon);
    figure.appendChild(captionDesc);
    currentTemp.appendChild(figure);
}

    