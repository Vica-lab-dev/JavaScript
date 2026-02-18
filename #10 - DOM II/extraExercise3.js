let div = document.querySelector("#main");

let score = 89;

let paragraph = document.createElement("p");
paragraph.textContent= (score < 88) ? "Fail" : "Pass";

div.appendChild(paragraph);

