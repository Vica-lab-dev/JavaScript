let clickPoints = [];

let canvasElement = document.querySelector("#drawArea");
let canvasDraw = document.querySelector("#draw");
let canvasReset = document.querySelector("#reset");
let ctx = canvasElement.getContext("2d");
let lineCounter = document.querySelector("#lineCounter");
let colorDrawing = document.querySelector("#colorDrawing");
let drawCounter = 0;



colorDrawing.addEventListener("click", function()
{
    let color = prompt("Please enter a color");

    drawPath(color);

    incrementDrawCounter();
    resetClickPoints();

    sendDrawMessage(color);
})




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
    let randomColor = generateRandomColor();
    drawPath(randomColor);
    incrementDrawCounter();

    sendDrawMessage(randomColor);
});





canvasReset.addEventListener("click", function()
{
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    lineCounter.innerHTML = "" ;
});


function resetClickPoints()
{
    clickPoints = [];
}



function incrementDrawCounter()
{
    drawCounter++;
}



function generateRandomColor()
{
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}


function sendDrawMessage(color)
{
    lineCounter.innerHTML += "Drawing"+" "+drawCounter+" line is " +color+ " ";

}



function drawPath(color)
{
    if (clickPoints.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(clickPoints[0].x, clickPoints[0].y);

    for(let i = 1; i < clickPoints.length; i++)
    {
        ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
    }

    ctx.strokeStyle = color;
    ctx.stroke();
    resetClickPoints();
}