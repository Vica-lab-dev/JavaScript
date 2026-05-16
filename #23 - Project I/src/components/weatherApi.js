import axios from "axios";

export async function getCurrentWeatherForLocation(location) {
    try{
        return await axios.get(process.env.API_URL+"/v1/current.json", {
            params: {
                key: process.env.API_KEY,
                q: location,
                aqi: "no"
            }
        });
    } catch (exception) {
        return alert("Something went wrong with getting current weather for location. Try again!");
    }

}

export async function getWeatherInFuture(location, date) {
    try{
        return await axios.get(process.env.API_URL+"/v1/future.json", {
            params: {
                key: process.env.API_KEY,
                q: location,
                dt: date
            }
        });
    } catch (exception) {
        return alert("Something went wrong with fetching data for weather in the future. Try again!");
    }

}