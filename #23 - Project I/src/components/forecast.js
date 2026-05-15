import axios from "axios";

const apiKey= "...";

export async function getForecast(location) {
    return await axios.get("http://api.weatherapi.com/v1/forecast.json", {
        params: {
            key: apiKey,
            q: location,
            days: 2,
            aqi: "no",
            alerts: "no",
        }
    });
}