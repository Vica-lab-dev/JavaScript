import axios from 'axios'
import { getUserLocation} from "./components/location.js";
import {getCurrentWeatherForLocation} from "./components/weatherApi.js";
import { getForecast } from "./components/forecast.js";

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

const forecastResponse = await getForecast(location, 3);

for(let forecast of forecastResponse.data.forecast.forecastday){
    console.log("Date: "+forecast.date+"Max Temp: "+forecast.day.maxtemp_c+"Min Temp: "+forecast.day.mintemp_c);
}