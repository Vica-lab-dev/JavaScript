let mainDiv = document.querySelector("#boxesContainer");

function getRandomColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb( ${r}, ${g}, ${b})`;
}

for(let i = 0; i < 3; i++)
{
    let div = document.createElement("div");
    div.style.width = "1000px";
    div.style.height = "100px";
    div.innerHTML =  `<strong>~~~Text ${i}~~~</strong>`;
    div.style.backgroundColor = getRandomColor();
    div.style.textAlign = "center";
    div.style.fontSize = "80px"

    mainDiv.appendChild(div);
}