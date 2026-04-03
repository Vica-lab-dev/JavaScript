let div = document.querySelector("#container");

function createCanvas(width, height)
{
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    canvas.style.border = "1px solid black";

    div.appendChild(canvas);

    return canvas;
}

createCanvas(600, 600);