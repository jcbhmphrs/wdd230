const url = 'https://openweathermap.org/data/2.5/weather?q=Logan,ut,us&units=imperial&APPID=f84d6da765b1806bee9bfbc125906539';
const weatherIcon = document.querySelector('#wIcon');
const caption = document.querySelector('figcaption');
const currentTemp = document.querySelector('#currentTempurature');
async function fetchAPI() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // displayResults(data); 
        console.log(data);
      } else {
        throw Error(await response.text());
      }
    }catch(error) {
        console.log(error);
    };
};
  
fetchAPI();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    caption.textContent = `${description}`;
}
