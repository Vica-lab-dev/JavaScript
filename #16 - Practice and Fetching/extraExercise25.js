let ul = document.querySelector("#cats");

fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data =>
{
    let adaptability = data.filter(cat => cat.adaptability >= 5);

    for(cat of adaptability)
    {
        let li = document.createElement("li");
        li.textContent = cat.name+" -> Temperament: "+cat.temperament;

        ul.append(li);
    }

}).catch(error => console.log(error));