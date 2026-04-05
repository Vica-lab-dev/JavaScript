let canvas = document.querySelector("#drawArea");
let ctx = canvas.getContext("2d");

function maxNumber(array)
{
    let max = array[0];
    for (let arr of array)
    {
        max = Math.max(max, arr);
    }
    return max;
}

let array = [100, 200, 174, 345];
let result = maxNumber(array);

function drawSquare(ctx, result)
{
    ctx.beginPath();
    ctx.rect(100, 150, result, result);
    ctx.fillStyle = "red";
    ctx.fill();
}

drawSquare(ctx, result);