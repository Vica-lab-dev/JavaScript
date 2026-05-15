import axios from 'axios'
import { getUserLocation} from "./components/location.js";
import {getCurrentWeatherForLocation} from "./components/weatherApi.js";

let location = localStorage.getItem('location') || getUserLocation();
localStorage.setItem('location', location);

document.querySelector("#locationButton").addEventListener('click', function () {
    let askLocation = getUserLocation();
    localStorage.setItem('location', askLocation);
    location = askLocation;
});

    const response = await getCurrentWeatherForLocation(location);
    console.log(response);

    if(!response.data.current.is_day){
        document.querySelector("body").style.backgroundColor = "#232222";
    }