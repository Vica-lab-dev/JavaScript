let numbers = [1, 3, 5, 6, 8, 10];
for(let i = 0; i < numbers.length; i++)
{
    if(numbers[i] % 2 === 0)
    {
        console.log(numbers[i]+" = Even!");
    }
    else
    {
        console.log(numbers[i]+" = Odd!");
    }
}