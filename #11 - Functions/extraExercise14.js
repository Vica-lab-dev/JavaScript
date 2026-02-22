let div = document.querySelector("#container");

function addBox(text, color)
{
    let boxDiv = document.createElement("div");
    let paragraph = document.createElement("p");

    paragraph.textContent = text;
    paragraph.style.fontSize = "90px";
    paragraph.style.textAlign = "center";
    boxDiv.appendChild(paragraph);

    boxDiv.style.width = "1000px";
    boxDiv.style.height = "100px";
    boxDiv.style.backgroundColor = color;

    div.appendChild(boxDiv);
}

addBox("Hello World!", "green");