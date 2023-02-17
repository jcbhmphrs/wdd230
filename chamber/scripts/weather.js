const lat = '41.779039';
const lon = '-111.795297';
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&APPID=0661a542273fa24290d2b34c31750d99`; 

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
    dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    let date = new Date();

    let today = {name:`Today`,seconds:data.list[0].dt,description:data.list[0].weather[0].description, temp:data.list[0].main.temp, icon: data.list[0].weather[0].icon};
    let tomorrow = {name:null,seconds:null,description:null, temp:null};
    let dayAfterT = {name:null,seconds:null,description:null, temp:null};
    let dayAfterAfter = {name:null,seconds:null,description:null, temp:null, icon:null};
    
    if (date.getDay() <= 3) {
        tomorrow.name = dayOfWeek[date.getDay()+1];
        dayAfterT.name = dayOfWeek[date.getDay()+2];
        dayAfterAfter.name = dayOfWeek[date.getDay()+3];
    }else if (date.getDay() == 4) {
        tomorrow.name = dayOfWeek[date.getDay()+1];
        dayAfterT.name = dayOfWeek[date.getDay()+2];
        dayAfterAfter.name = dayOfWeek[date.getDay()-4];
    }else if (date.getDay() == 5) {
        tomorrow.name = dayOfWeek[date.getDay()+1];
        dayAfterT.name = dayOfWeek[date.getDay()-5];
        dayAfterAfter.name = dayOfWeek[date.getDay()-4];
    } else {
        tomorrow.name = dayOfWeek[date.getDay()-6];
        dayAfterT.name = dayOfWeek[date.getDay()-5];
        dayAfterAfter.name = dayOfWeek[date.getDay()-4];
    };

    tomorrow.seconds = data.list[0].dt + 86400;
    dayAfterT.seconds = data.list[0].dt + 172800;
    dayAfterAfter.seconds = data.list[0].dt + 259200;

    data.list.forEach(threeHours => {
        if (threeHours.dt == tomorrow.seconds){
            tomorrow.description = threeHours.weather[0].description;
            tomorrow.temp = threeHours.main.temp;
            tomorrow.icon = threeHours.weather[0].icon;
        };
        if (threeHours.dt == dayAfterT.seconds){
            dayAfterT.description = threeHours.weather[0].description;
            dayAfterT.temp = threeHours.main.temp;
            dayAfterT.icon = threeHours.weather[0].icon;
        };
        if (threeHours.dt == dayAfterAfter.seconds){
            dayAfterAfter.description = threeHours.weather[0].description;
            dayAfterAfter.temp = threeHours.main.temp;
            dayAfterAfter.icon = threeHours.weather[0].icon;
        };
    });

    const forecast = document.querySelector('#forecast');
    forecastedDays = [today, tomorrow, dayAfterT, dayAfterAfter];
    
    forecastedDays.forEach(day=>{
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const p = document.createElement('p');
        h2.style.color = '#fff5ec'
        p.style.color = '#fff5ec'
        h2.innerHTML = `${day.name}:`;
        img.setAttribute('src',`https://openweathermap.org/img/wn/${day.icon}.png`);
        img.setAttribute('alt','icon');
        p.innerHTML = `${day.description} and temperatures around ${day.temp}&deg;F`
        forecast.appendChild(h2);
        forecast.appendChild(img);
        forecast.appendChild(p);
    });
}; 