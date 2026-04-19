fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data => {

    let mainDiv = document.querySelector("#cats");

    data.forEach(cat => {
        let [min, max] = cat.life_span.split(" - ").map(Number);

        if (max > 15)
        {
            let div = document.createElement("div");

            let name = document.createElement("h3");
            name.textContent = cat.name;

            let lifeSpan = document.createElement("p");
            lifeSpan.textContent = "Life span: " + cat.life_span + " years";

            div.appendChild(name);
            div.appendChild(lifeSpan);
            mainDiv.appendChild(div);
        }
    });

})
.catch(err => console.log(err));