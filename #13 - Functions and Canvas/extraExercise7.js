let canvas = document.querySelector("#drawArea");
let ctx = canvas.getContext("2d");

function arrayAverage(array)
{
    let sum = 0;

    for (let arr of array)
    {
        sum += arr;
    }

    return sum / array.length;

}

let array = [2, 2, 5];
let result = arrayAverage(array);
console.log(result);

ctx.font = "20px Arial";
ctx.fillStyle = "blue";
ctx.fillText(result, 100, 100);