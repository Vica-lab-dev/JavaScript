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

let car =
    {
        make: "Toyota",
        model: "Corolla",
        year: 2005,
        color: "white",
    }

for(i in car)
{
    switch(i)
    {
        case "make":
            console.log("Make:"+car[i]);
            break;
        case "model":
            console.log("Model:"+car[i])
            break;
        case "year":
            console.log("Year:"+car[i])
            break;
        case "color":
            console.log("Color:"+car[i])
            break;
    }
}