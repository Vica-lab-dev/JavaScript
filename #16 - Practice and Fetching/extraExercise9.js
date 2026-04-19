let div = document.querySelector("#breeds");

fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data =>
{
    let affectionLevel = data.filter(cat => cat.affection_level >= 4);

    for(let cat of affectionLevel)
    {
        let p = document.createElement("p");
        p.textContent = "Name: "+cat.name+" - Affection Level: "+cat.affection_level;

        div.append(p);
    }
}).catch(err => console.log(err));