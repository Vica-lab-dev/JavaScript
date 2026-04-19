let div = document.querySelector("#cats");

fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data =>
{
    let intelligent = data.filter(cat => cat.temperament.includes("Intelligent"));

    for(let cat of intelligent)
    {
        let p = document.createElement("p");
        p.textContent = "Name: "+cat.name+" - Temperament: "+cat.temperament;

        div.append(p);
    }
}).catch(error => console.log(error));