let canvasElement = document.querySelector("#drawArea");
let ctx = canvasElement.getContext("2d");

function increaseNumber(number)
{
    return number + 1;
}

let newNumber = increaseNumber(-5);

ctx.font = "50px Verdana";
ctx.fillStyle = "red";
ctx.fillText(newNumber, 300, 300);