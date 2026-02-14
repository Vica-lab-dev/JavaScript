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