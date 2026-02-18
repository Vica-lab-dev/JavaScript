let boxesDiv = document.querySelector("#boxes");

function getRandomColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

for(let i = 0; i < 4; i++)
{
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = getRandomColor();

    boxesDiv.appendChild(div);
}