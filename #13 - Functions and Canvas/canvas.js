let clickPoints = [];

let canvasElement = document.querySelector("#drawArea");
let ctx = canvasElement.getContext("2d");

canvasElement.addEventListener("click", function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log(x, y);

    clickPoints.push({x: x, y: y});
    console.log(clickPoints)


    if(clickPoints.length >= 5)
    {
        ctx.beginPath();
        ctx.moveTo(clickPoints[0].x, clickPoints[0].y);

        for(let i in clickPoints)
        {
            if(i == 0)
            {
                continue;
            }
            ctx.lineTo(clickPoints[i].x, clickPoints[i].y)
        }

        ctx.stroke();

        clickPoints = [];
    }
});

