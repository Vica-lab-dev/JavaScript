let cities =
    [
        "Beograd",
        "Subotica",
        "Novi Sad",
        "Sarajevo",
        "Podgorica",
        "Zagreb"
    ]

let citySelector = document.querySelector("#cities");

for(let city of cities)
{
    let arrayCities = document.createElement("option");
    arrayCities.innerHTML = city;

    citySelector.appendChild(arrayCities);
}

let types =
    [
        "Apartments",
        "houses",
        "commercial properties",
        "land plots",
        "garages/parking spaces"
    ]

let typeSelector = document.querySelector("#type");

for(let type of types)
{
    let arrayTypes = document.createElement("option");
    arrayTypes.innerHTML = type;

    typeSelector.appendChild(arrayTypes);
}

let roomSelector = document.querySelector("#rooms");

let rooms =
    [
        "Studio apartment",
        "One-bedroom apartment",
        "Two-bedroom apartment",
        "Three-bedroom apartment",
        "Four-bedroom apartment",
        "Penthouse",
        "Duplex",
        "Loft"
    ]

for(let room of rooms)
{
    let roomOption = document.createElement("option");
    roomOption.innerHTML = room;

    roomSelector.appendChild(roomOption);
}

let currentCity = null;
let currentType = null;

typeSelector.addEventListener("change", function(event){
    currentType = event.currentTarget.value;
});

citySelector.addEventListener("change", function(event) {
    currentCity = event.currentTarget.value;
});
document.querySelector("#searchPropertiesButton").addEventListener("click", function() {
    console.log(currentCity, currentType)
});