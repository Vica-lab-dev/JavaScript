function parity(number)
{
    let even = "Even!";
    let odd = "Odd!";

    if(number % 2 === 0)
    {
        return even;
    }
    else
    {
        return odd;
    }
}

let result = parity(5);
console.log(result);