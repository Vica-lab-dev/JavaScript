let canvasElement = document.querySelector("#drawArea");
let ctx = canvasElement.getContext("2d");

function drawCircle(ctx, x, y, r, color)
{
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
}

drawCircle(ctx, 300, 300, 300, "orange" );