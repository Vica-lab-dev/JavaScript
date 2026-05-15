import {getForecast} from "./forecast.js";

export function renderForecast(forecast, mainDiv) {
    const location = forecast.data.location;
    const todayForecast = forecast.data.forecast.forecastday[0];
    const nextForecast = forecast.data.forecast.forecastday[1]
    const isDay = forecast.data.current.is_day;
    const body = document.body;

    if(isDay === 1) {
        body.classList.add("day");
        body.classList.remove("night");
    } else {
        body.classList.add("night");
        body.classList.remove("day");
    }

    let div = document.createElement("div");

    let city = document.createElement("h3");
    city.innerText = location.name;

    let region = document.createElement("h5");
    region.innerText = location.region;

    let forecastDate = document.createElement("p");
    forecastDate.innerText = "Date: "+todayForecast.date;

    let sunrise = document.createElement("p");
    sunrise.innerText = "Sunrise: "+todayForecast.astro['sunrise'];

    let sunset = document.createElement("p");
    sunset.innerText = "Sunset: "+todayForecast.astro['sunset'];

    let moonrise = document.createElement("p");
    moonrise.innerText = "Moonrise: "+todayForecast.astro['moonrise'];

    let moonset = document.createElement("p");
    moonset.innerText = "Moonset: "+todayForecast.astro['moonset'];

    let nextForecastDate = document.createElement("p");
    nextForecastDate.innerText = "Date: "+nextForecast.date;

    let nextSunrise = document.createElement("p");
    nextSunrise.innerText = "Sunrise: "+nextForecast.astro['sunrise'];

    let nextSunset = document.createElement("p");
    nextSunset.innerText = "Sunset: "+nextForecast.astro['sunset'];

    let nextMoonrise = document.createElement("p");
    nextMoonrise.innerText = "Moonrise: "+nextForecast.astro['moonrise'];

    let nextMoonset = document.createElement("p");
    nextMoonset.innerText = "Moonset: "+nextForecast.astro['moonset'];

    div.append(city, region, forecastDate, sunrise, sunset, moonrise, moonset,
        nextForecastDate, nextSunrise, nextSunset, nextMoonrise, nextMoonset);

    mainDiv.append(div);

    return mainDiv;
}