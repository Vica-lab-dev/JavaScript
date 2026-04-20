let div =document.querySelector("#pokemon");

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(response => response.json())
.then(data =>
{
    let charmeleon = data.results.filter(poke => poke.name === "charmeleon");

    for(let pokemon of charmeleon)
    {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(details =>
            {
                let h3 = document.createElement("h3");
                h3.innerText = details.name;

                let p = document.createElement("p");
                p.innerText = "Height: "+details.height+" - Weight: "+details.weight;

                div.append(h3, p);
            });
    }

}).catch(err => console.log(err))