let ul = document.querySelector("#citiesList");

let cities = ["Kragujevac", "Subotica", "Novi Sad", "Nis", "Beograd"];

for(let city of cities)
{
    let li = document.createElement("li");

    if(city === "Nis")
    {
        continue;
    }

    li.textContent = city;

    ul.appendChild(li);
}