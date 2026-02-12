let div = document.querySelector(".container");

let paragraph = document.createElement("p");
paragraph.textContent = "Paragraph 1";
div.appendChild(paragraph);

for(let i = 2; i < 5; i++)
{
    let paragraphs = document.createElement("p");
    paragraphs.textContent = "Paragraph"+[i];
    div.appendChild(paragraphs);
}