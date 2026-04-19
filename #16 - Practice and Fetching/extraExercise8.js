let ul = document.querySelector("#breeds");

fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data =>
{
    for(let breed of data)
    {
        let li = document.createElement("li");
        li.innerHTML = breed.name;

        ul.append(li);
    }
}).catch(err => console.log(err));