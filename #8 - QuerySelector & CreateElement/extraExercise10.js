let div = document.querySelector("#container");

for(let i = 1; i < 6; i++)
{
    let paragraph = document.createElement("p");
    paragraph.textContent = "Paragraph"+" "+[i];

    div.appendChild(paragraph);
}