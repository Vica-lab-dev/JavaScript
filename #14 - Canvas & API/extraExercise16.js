fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
.then(res => res.json())
.then(data => {
    let ul = document.querySelector("#experience");
    data.results.forEach(pokemon =>
    {
        fetch(pokemon.url)
            .then(res => res.json())
        .then(details =>
        {
            if(details.base_experience > 50)
            {
                let li = document.createElement("li");
                li.textContent = details.name + " - " + details.base_experience;
                ul.appendChild(li);
            }
        });
    });
})
.catch(err => console.log(err));