let div = document.querySelector("#loopText");

for(let i = 0; i < 5; i++)
{
    let paragraph = document.createElement("p");

    if(i % 2 === 0)
    {
        paragraph.style.color = "blue";
    }

    paragraph.textContent = "Paragraph "+[i];

    div.appendChild(paragraph);
}