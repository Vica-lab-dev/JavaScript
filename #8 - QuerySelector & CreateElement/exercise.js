let cars = [
    {
        name: "Audi A4",
        price: 9999,
        image: "https://www.audi.rs/content/dam/nemo/models/a4/a4-sedan/my-2023/1920x1080-inline-media-gallery/1920x1080-audi-a4-sedan.jpg"
    },
    {
        name: "Audi A6",
        price: 14500,
        image: "https://www.audi.rs/content/dam/nemo/models/a6/a6-sedan/my-2023/1920x1080-inline-media-gallery/1920x1080-audi-a6-sedan.jpg"
    },
    {
        name: "BMW M3",
        price: 18900,
        image: "https://www.bmw.rs/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/overview/bmw-m3-sedan-overview.jpg"
    },
    {
        name: "BMW M5",
        price: 25900,
        image: "https://www.bmw.rs/content/dam/bmw/common/all-models/m-series/m5-sedan/2023/overview/bmw-m5-sedan-overview.jpg"
    },
    {
        name: "Mercedes C-Class",
        price: 11200,
        image: "https://www.mercedes-benz.rs/content/dam/hq/passengercars/cars/c-class/saloon-w206/overview/teaser.jpg"
    },
    {
        name: "Mercedes E-Class",
        price: 17800,
        image: "https://www.mercedes-benz.rs/content/dam/hq/passengercars/cars/e-class/saloon-w213/overview/teaser.jpg"
    },
    {
        name: "VW Passat",
        price: 8900,
        image: "https://www.volkswagen.rs/content/dam/vw-ngw/vw_pkw/importers/rs/models/passat/passat-teaser.jpg"
    },
    {
        name: "VW Golf 7",
        price: 7600,
        image: "https://www.volkswagen.rs/content/dam/vw-ngw/vw_pkw/importers/rs/models/golf-7/golf-7-teaser.jpg"
    }
];

for(let car of cars)
{
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = car.image;
    let paragraph = document.createElement("p");
    paragraph.textContent= car.name;
    let span = document.createElement("span");
    span.textContent = car.price;

    paragraph.appendChild(span);
    div.appendChild(image);
    div.appendChild(paragraph);

    document.querySelector("#main").appendChild(div);

}


