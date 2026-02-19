let div = document.querySelector("#numbers");

let numbers = [2, 4, 6, 8];

for(let number of numbers)
{
    let square = number * number;

    let paragraph = document.createElement("p");
    paragraph.textContent = "Square of number "+number+" is "+square;

    div.appendChild(paragraph);
}