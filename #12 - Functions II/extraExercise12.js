let numbers = [1,2,3,4,5,6,7,9];

function oddNumbersLength(numberList)
{
    let count = 0;

    for(let num of numberList)
    {
        if(num % 2 === 1)
        {
            count++;
        }
    }
    return count;
}

let result = oddNumbersLength(numbers);
console.log(result);