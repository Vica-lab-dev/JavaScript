let div = document.querySelector("#flexContainer");

for(let i = 0; i < 5; i++)
{
    let paragraph = document.createElement("p");
    div.appendChild(paragraph);

    if(i % 2 === 0)
    {
        paragraph.innerHTML = `<strong>Row ${i}</strong>`;
    }
    else {
        paragraph.textContent = "Row" + [i];
    }
}