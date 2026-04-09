fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => {
        let div = document.querySelector("#cats");
        let catTemperament = data.filter(cat => cat.temperament.includes("Affectionate"));

        catTemperament.forEach(temperament =>
        {
            let p = document.createElement("p");
            p.textContent = temperament.name;
            div.appendChild(p);
        });
    })
    .catch(err => console.log(err));
