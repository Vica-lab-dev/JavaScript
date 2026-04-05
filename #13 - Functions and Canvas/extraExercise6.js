let canvas = document.querySelector("#drawArea");
let ctx = canvas.getContext("2d");

function drawLine(ctx, x1, y1, x2, y2, color)
{

    canvas.addEventListener("click", function () {
        ctx.beginPath();
        ctx.strokeStyle = color
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    });
}

drawLine(ctx, 100,120, 300, 340, "red");
