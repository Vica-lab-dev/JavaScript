
function printEvenElements(array)
{
    let numbers = [];
    for(let number of array)
    {
        if(number % 2 === 0)
        {
            numbers.push(number);
        }
    }

    return numbers;
}

let input = [1,2,3,4,5,6,7,8,9,10]
let result = printEvenElements(input);
console.log(result);