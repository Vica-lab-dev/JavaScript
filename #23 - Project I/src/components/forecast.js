import axios from "axios";

export async function getForecast(location, days) {
    try {
        return await axios.get(process.env.API_URL+"/v1/forecast.json", {
            params: {
                key: process.env.API_KEY,
                q: location,
                days: days,
                aqi: "no",
                alerts: "no",
            }
        });
    } catch (exception) {
        return alert("Something went wrong with forecast data. Try again!");
    }

}