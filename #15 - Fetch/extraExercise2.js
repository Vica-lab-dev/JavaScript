fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data => {
    let div = document.querySelector("#cats");

    data.forEach(cat =>
    {
        let catDiv = document.createElement("div");

        let name = document.createElement("h3");
        name.textContent = cat.name;

        let weight = document.createElement("p");
        weight.textContent = "Weight: "+cat.weight.metric+"kg";

        let height = document.createElement("p");
        height.textContent = "Height: Not available";


        catDiv.appendChild(name);
        catDiv.appendChild(weight);
        catDiv.appendChild(height);
        div.appendChild(catDiv);
    });
})
.catch(err => console.log(err));