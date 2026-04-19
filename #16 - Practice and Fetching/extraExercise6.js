let ul = document.querySelector("#poke");

fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
.then(response => response.json())
.then(data =>
{
    for(let pokemon of data.results)
    {
        let li = document.createElement("li");
        li.innerHTML = pokemon.name;

        ul.append(li);
    }
}).catch(error => console.log(error));