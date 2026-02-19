let div = document.querySelector("#colorBox");

div.style.width = "1000px";
div.style.height = "100px";

function getRandomColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb( ${r}, ${g}, ${b})`;
}

div.addEventListener("mouseover", function (){
    div.style.backgroundColor = getRandomColor();
})

