let clickPoints = [];

let canvasElement = document.querySelector("#drawArea");
let canvasDraw = document.querySelector("#draw");
let canvasReset = document.querySelector("#reset");
let ctx = canvasElement.getContext("2d");
let lineCounter = document.querySelector("#lineCounter");
let drawCounter = 0;




canvasElement.addEventListener("click", function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log(x, y);

    clickPoints.push({x: x, y: y});
    console.log(clickPoints)
});

canvasDraw.addEventListener("click", function()
{
    if (clickPoints.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(clickPoints[0].x, clickPoints[0].y);

    for(let i = 1; i < clickPoints.length; i++)
    {
        ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
    }

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    ctx.strokeStyle = "#"+randomColor;
    ctx.stroke();
    clickPoints = [];

    drawCounter++;

    lineCounter.innerHTML += "Drawing"+" "+drawCounter+" line is " + randomColor+ " ";
});

canvasReset.addEventListener("click", function()
{
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

});