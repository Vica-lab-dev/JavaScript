fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => {
        let ul = document.querySelector("#adaptability");
        let catAdaptability = data.filter(cat => cat.adaptability >= 5);

        catAdaptability.forEach(cat =>
        {
            let li = document.createElement("li");
            li.textContent = cat.name+" - Adaptability: "+cat.adaptability;
            ul.appendChild(li);
        });
    })