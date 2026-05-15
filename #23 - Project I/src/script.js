import axios from 'axios'
import { getUserLocation} from "./components/location.js";

let location = localStorage.getItem('location') || getUserLocation();
localStorage.setItem('location', location);

document.querySelector("#locationButton").addEventListener('click', function () {
    let askLocation = getUserLocation();
    localStorage.setItem('location', askLocation);
});

//http://api.weatherapi.com/v1/current.json?key=apiKey&q=London&aqi=no
try {
    const response = await axios.get("http://api.weatherapi.com/v1/current.json", {
        params: {
            key: apiKey,
            q: location,
            aqi: "no"
        }
    });

    if(!response.data.current.is_day){
        document.querySelector("body").style.backgroundColor = "#232222";
    }
} catch (error) {
    alert("Something went wrong. Please try again.");
}