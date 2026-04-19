let select = document.querySelector("#cats");

fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data =>
{
    for(let cat of data)
    {
        let option = document.createElement("option");
        option.textContent = cat.name;
        option.style.color = "red";

        select.append(option);
    }
}).catch(error => console.log(error));