import axios from "axios";

export async function getForecast(location, days) {
    return await axios.get("http://api.weatherapi.com/v1/forecast.json", {
        params: {
            key: apiKey,
            q: location,
            days: days,
            aqi: "no",
            alerts: "no",
        }
    });
}