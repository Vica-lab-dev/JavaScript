import axios from "axios";

export async function getGeolocationForCoords(lat, long) {
    try {
        return await axios.get(process.env.OPENWEATHER_API_URL+"/1.0/reverse", {
            params: {
                lat: lat,
                lon: lon,
                limit: 1,
                appid: process.env.OPENWEATHER_API_KEY
            }
        });
    } catch (ecxeption) {
        return alert("Something went wrong while fetching geolocation data. Try again!");
    }

}
