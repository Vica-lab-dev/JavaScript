let ul = document.querySelector("#cats");

fetch(" https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data =>
{
    console.log(data);

    for(let cat of data) {
        let [min, max] = cat.life_span.split(" - ").map(Number);

        if (max >= 15)
        {
            let li = document.createElement("li");
            li.textContent = cat.name+" - Life span -> "+cat.life_span;

            ul.append(li);
        }
    }
}).catch(error => console.log(error));