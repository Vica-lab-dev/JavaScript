let cities =
    [
        "Beograd",
        "Subotica",
        "Novi Sad",
        "Sarajevo",
        "Podgorica",
        "Zagreb"
    ]

let select = document.querySelector("#cities");

for(let city of cities)
{
    let arrayCities = document.createElement("option");
    arrayCities.innerHTML = city;

    select.appendChild(arrayCities);
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
