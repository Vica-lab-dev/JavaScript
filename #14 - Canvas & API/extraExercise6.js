fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
.then(response => response.json())
.then(data =>
{
    let ul = document.querySelector("#pokemon");

    data.results.forEach(pokemon => {
        let li = document.createElement("li");
        li.textContent = pokemon.name;
        ul.appendChild(li);
    });
})
.catch(err => console.log(err));