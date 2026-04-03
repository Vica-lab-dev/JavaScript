let canvasElement = document.querySelector("#drawArea");
let ctx = canvasElement.getContext("2d");

function drawRectangle(ctx, x, y, width, height, color)
{
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.stroke();
}

drawRectangle(ctx, 200, 100, 350, 200, "blue");