import axios from 'axios'
import { getUserLocation} from "./components/location.js";
import {getCurrentWeatherForLocation} from "./components/weatherApi.js";
import { getForecast} from "./components/forecast.js";
import { renderForecast} from "./components/forecastView.js";

let mainDiv = document.querySelector("#mainDiv");

let location = localStorage.getItem('location') || getUserLocation();
localStorage.setItem('location', location);

document.querySelector("#locationButton").addEventListener('click', async function () {
    location = getUserLocation();
    localStorage.setItem('location', location);
});

const response = await getCurrentWeatherForLocation(location);

if(!response.data.current.is_day){
    document.querySelector("body").style.backgroundColor = "#232222";
}

const forecast = await getForecast(location);

renderForecast(forecast, mainDiv);