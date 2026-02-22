let div = document.querySelector("#container");

function greetAll(namesArray)
{
    for(let arr of namesArray)
    {
        let paragraph = document.createElement("p");
        paragraph.innerText = "Hello " + arr;
        div.appendChild(paragraph);
    }
}

let nameList = ["Viktor", "Marko", "Vuk"];

greetAll(nameList);