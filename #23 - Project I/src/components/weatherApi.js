import axios from "axios";

//http://api.weatherapi.com/v1/current.json?key=apiKey&q=London&aqi=no

export async function getCurrentWeatherForLocation(location) {
    return await axios.get("http://api.weatherapi.com/v1/current.json", {
        params: {
            key: apiKey,
            q: location,
            aqi: "no"
        }
    });
}