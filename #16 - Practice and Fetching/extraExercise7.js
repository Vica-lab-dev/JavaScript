let div = document.querySelector("#pokemon");

fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(data => {
    let name = data.results.filter(pokemon => pokemon.name === "venusaur");

    for (let poke of name)
    {
        fetch(poke.url)
            .then(res => res.json())
            .then(pokemon =>
            {
                let p = document.createElement("p");
                p.innerText = "Name: "+pokemon.name+" - weight: " + pokemon.weight+" - height: "+pokemon.height;

                div.append(p);
            });
    }
}).catch(err => console.log(err));