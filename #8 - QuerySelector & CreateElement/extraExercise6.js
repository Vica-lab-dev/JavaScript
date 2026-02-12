let ul = document.getElementById("cities");

let cities = ["Belgrade", "New York", "Paris", "Novi Sad"];

for(let city of cities)
{
    if(city[0].toLowerCase() === "n")
    {
        let li = document.createElement("li");
        li.textContent = city;
        ul.appendChild(li);
    }
}