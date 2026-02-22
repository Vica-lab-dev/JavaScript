let div = document.querySelector("#container");

function printStringLength(string)
{
    let paragraph = document.createElement("p");
    paragraph.innerText = string.length;
    div.appendChild(paragraph);
}

printStringLength("Hello, World!");