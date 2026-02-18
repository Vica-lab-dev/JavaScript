let div = document.querySelector(".container");

let products = ["Milk", "Bread", "Cheese"];

function getRandomColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

for(let i = 0; i < products.length; i++)
{
    let span = document.createElement("span");
    span.textContent = "Element"+[i];
    span.style.color = getRandomColor();
    div.appendChild(span);
}