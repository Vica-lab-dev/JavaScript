let canvas = document.querySelector("#drawArea");
let ctx = canvas.getContext("2d");

function writeText(ctx, text, x, y, color)
{
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);

    return text;
}

writeText(ctx, "Finished", 100, 100, "black");
