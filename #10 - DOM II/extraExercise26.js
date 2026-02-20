let button = document.querySelector("#addItemBtn");
let ul = document.querySelector("#items");

function getRandomColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb( ${r}, ${g}, ${b})`;
}

button.addEventListener("click", function (){
    let li = document.createElement("li");

    li.textContent = "New Text!";
    li.style.color = getRandomColor();

    ul.appendChild(li);
})