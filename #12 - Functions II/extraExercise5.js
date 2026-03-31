let numbers = [0,-1, 1, 2, 3, 4, 5];

function minNumber(numberList)
{
    let min = numberList[0];

    for(let num of numberList)
    {
       min = Math.min(min, num);
    }

    return min;
}

let result = minNumber(numbers);
console.log(result);