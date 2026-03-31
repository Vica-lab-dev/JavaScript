let numbers = [2, 2, 3, 3];

function average(numberList)
{
    let sum = 0;

    for(let num of numberList)
    {
        sum += num;
    }

    return sum / numbers.length;
}

let result = average(numbers);
console.log(result);