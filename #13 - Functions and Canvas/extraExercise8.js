let canvas = document.querySelector("#drawArea");
let ctx = canvas.getContext("2d");

function randomColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function drawCircle(ctx, x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawCombination(ctx)
{
    drawCircle(ctx, 300, 300, 300, randomColor());
    drawCircle(ctx, 200, 200, 200, randomColor());
    drawCircle(ctx, 100, 100, 100, randomColor());
}

drawCombination(ctx);