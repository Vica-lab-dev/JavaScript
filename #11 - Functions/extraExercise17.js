let div = document.querySelector("#container");

function addParagraphs(texts)
{
    for(let text of texts)
    {
        let paragraph = document.createElement("p");
        paragraph.innerText = text;
        div.appendChild(paragraph);
    }
}

let array = ["Hello world!", "World, Hello"];

addParagraphs(array);