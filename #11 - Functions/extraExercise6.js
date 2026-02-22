let div = document.querySelector("#container");

function addParagraph(text)
{
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    div.appendChild(paragraph);
}

addParagraph("Hello world!");