let div = document.querySelector("#main");

let h = document.createElement("h2");
h.textContent = "Title";

let paragraph = document.createElement("p");
paragraph.textContent = "Paragraph";

div.appendChild(h);
div.appendChild(paragraph);

let changedParagraph = document.getElementsByTagName("p");
changedParagraph[0].innerHTML = "Paragraph changed";




