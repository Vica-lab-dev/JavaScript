let numbers = [2, 3, 2, 3, 6];

function sumOfEven(numberList) {
    let sum = 0;

    for (let num of numberList)
    {
        if (num % 2 === 0)
        {
            sum += num;
        }
    }

    return sum;
}

let result = sumOfEven(numbers);
console.log(result);