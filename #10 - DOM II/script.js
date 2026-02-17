let cities =
    [
        "All",
        "Beograd",
        "Subotica",
        "Novi Sad",
        "Sarajevo",
        "Podgorica",
        "Zagreb"
    ]

let types =
    [
        "Apartments",
        "houses",
        "commercial properties",
        "land plots",
        "garages/parking spaces"
    ]

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

let realEstates =
    [
        {
            city: "Beograd",
            option: "apartments",
            type: "Studio apartment",
            price: 42000,
            size: 42
        },
        {
            city: "Subotica",
            option: "houses",
            type: "One-bedroom apartment",
            price: 35000,
            size: 60
        },
        {
            city: "Novi Sad",
            option: "land plots",
            type: "Duplex",
            price: 64400,
            size: 79
        },
        {
            city: "Sarajevo",
            option: "commercial properties",
            type: "Loft",
            price: 48000,
            size: 85
        },
        {
            city: "Podgorica",
            option: null,
            type: "Two-bedroom apartment",
            price: 32000,
            size: 55
        },
        {
            city: "Zagreb",
            option: "garages/parking spaces",
            type: "garages/parking spaces",
            price: 45000,
            size: 20
        }
    ]

let citySelector = document.querySelector("#cities");
let typeSelector = document.querySelector("#type");
let roomSelector = document.querySelector("#rooms");

for(let city of cities)
{
    let arrayCities = document.createElement("option");
    arrayCities.innerHTML = city;

    citySelector.appendChild(arrayCities);

    let cityFound = false;

    for(let estate of realEstates)
    {
        if(estate.city === city && estate.option !== null)
        {
            cityFound = true;
            break;
        }
    }

    if(!cityFound)
    {
        arrayCities.setAttribute("disabled", "true");
    }
}


for(let type of types)
{
    let arrayTypes = document.createElement("option");
    arrayTypes.innerHTML = type;

    typeSelector.appendChild(arrayTypes);
}


for(let room of rooms)
{
    let roomOption = document.createElement("option");
    roomOption.innerHTML = room;

    roomSelector.appendChild(roomOption);
}


let currentCity = null;
let currentType = null;
let currentRoom = null;

typeSelector.addEventListener("change", function(event){
    currentType = event.currentTarget.value;
});

roomSelector.addEventListener("change", function(event){
    currentRoom = event.currentTarget.value;
})

citySelector.addEventListener("change", function(event) {
    currentCity = event.currentTarget.value;

    let allEstates = document.getElementsByClassName("estate");

    for(let estate of allEstates)
    {
        let estateCity = estate.querySelector(".city").textContent;

        estate.classList.remove("hidden");

        if(estateCity !== currentCity && currentCity !== "All")
        {
            estate.classList.add("hidden");
        }
    }

});


let divEstates = document.querySelector("#estates");

for(let estate of realEstates)
{
    let div = document.createElement("div");
    div.classList.add("estate");
    divEstates.appendChild(div);

    let h1 = document.createElement("h1");
    h1.innerHTML = estate.city;
    h1.classList.add("city");
    div.appendChild(h1);

    let optionParagraph = document.createElement("p");
    optionParagraph.innerHTML ="Option: "+estate.option;
    if(estate.option === null)
    {
        optionParagraph.innerHTML = "--";
    }
    div.appendChild(optionParagraph);

    let priceParagraph = document.createElement("p");
    priceParagraph.innerHTML ="Price: "+estate.price;
    div.appendChild(priceParagraph);

    let sizeParagraph = document.createElement("p");
    sizeParagraph.innerHTML ="Size: "+estate.size;
    div.appendChild(sizeParagraph);
}