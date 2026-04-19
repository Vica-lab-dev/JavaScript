let ul = document.querySelector("#pokemons");

fetch("https://pokeapi.co/api/v2/pokemon")
.then(res => res.json())
.then(data =>
{
    for(let pokemon of data.results)
    {
        fetch(pokemon.url)
            .then(res => res.json())
            .then(details =>
            {
                if(details.base_experience > 50)
                {
                    let li = document.createElement("li");
                    li.innerHTML = "Name: "+details.name+" - Base Experience: "+details.base_experience;

                    ul.append(li);
                }
            });
    }
}).catch(err => console.log(err));