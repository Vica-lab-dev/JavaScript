fetch("https://pokeapi.co/api/v2/pokemon/3/")
.then(res => res.json())
.then(data => {

    let div = document.querySelector("#pokemon");

        let weightParagraph = document.createElement("p");
        weightParagraph.innerText = data.weight;
        let heightParagraph = document.createElement("p");
        heightParagraph.innerText = data.height;
        div.appendChild(weightParagraph);
        div.appendChild(heightParagraph);
})
.catch(err => console.log(err));