let mainDiv = document.querySelector("#pokemon");

fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
.then(res => res.json())
.then(data =>
{
        for(let poke of data.results)
        {
            fetch(poke.url)
            .then(res => res.json())
            .then(pokemon =>
            {
                console.log(pokemon);
                let div = document.createElement("div");

                let h3 = document.createElement("h3");
                h3.innerHTML = pokemon.types[0].type.name;

                div.append(h3);
                mainDiv.append(div);
            });
        }
}).catch(error => console.log(error));