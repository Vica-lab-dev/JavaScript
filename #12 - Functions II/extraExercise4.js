let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function maxNumber(numberList)
{

    let max = 0;

    for(let num of numberList)
    {
        max = Math.max(num);
    }

    return max;
}

let result = maxNumber(numbers);
console.log(result);