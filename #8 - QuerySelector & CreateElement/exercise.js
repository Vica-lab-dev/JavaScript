let cars = [
    {
        name: "Audi A4",
        price: 9999,
        production_year: 2012,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRMxq4ESZEyFq-HB8jHS44X-Mk_V7tQvztQ&s"
    },
    {
        name: "Audi A6",
        price: 14500,
        production_year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRMxq4ESZEyFq-HB8jHS44X-Mk_V7tQvztQ&s"
    },
    {
        name: "BMW M3",
        price: 18900,
        production_year: 2014,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRMxq4ESZEyFq-HB8jHS44X-Mk_V7tQvztQ&s"
    },
    {
        name: "BMW M5",
        price: 25900,
        production_year: 2013,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRMxq4ESZEyFq-HB8jHS44X-Mk_V7tQvztQ&s"
    },
    {
        name: "Mercedes C-Class",
        price: 11200,
        production_year: 2014,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRMxq4ESZEyFq-HB8jHS44X-Mk_V7tQvztQ&s"
    },
    {
        name: "Mercedes E-Class",
        price: 17800,
        production_year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRMxq4ESZEyFq-HB8jHS44X-Mk_V7tQvztQ&s"
    },
    {
        name: "VW Passat",
        price: 8900,
        production_year: 2012,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRMxq4ESZEyFq-HB8jHS44X-Mk_V7tQvztQ&s"
    },
    {
        name: "VW Golf 7",
        price: 7600,
        production_year: 2015,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRMxq4ESZEyFq-HB8jHS44X-Mk_V7tQvztQ&s"
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

    if(car.production_year === 2025)
    {
        let productionYearSpan = document.createElement("span");
        productionYearSpan.textContent = "NEW!";
        productionYearSpan.classList = "productionYear";

        div.appendChild(productionYearSpan);

    }

    document.querySelector("#main").appendChild(div);

}


