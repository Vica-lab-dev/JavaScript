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

let students =
    [
        {
            name: "Viktor",
            grade: 40,
        },
        {
          name: "Marko",
          grade: 70,
        },
        {
          name: "Ivan",
          grade: 51,
        }

    ]


for(let i = 0; i < students.length; i++)
{
    if(students[i]["grade"] >= 50)
    {
        console.log(students[i]["name"]+" Pass!");
    }
    else
    {
        console.log(students[i]["name"]+" Fail!");
    }
}

let grades =  [91, 79, 63, 49];

for(let i = 0; i < grades.length; i++)
{
    if(grades[i] >= 90)
    {
        console.log(grades[i]+" - Excellent!");
    }
    else if(grades[i] >= 75 && grades[i] < 90)
    {
        console.log(grades[i]+" - Good!");
    }
    else if(grades[i] >= 50 && grades[i] < 75)
    {
        console.log(grades[i]+" - Average!");
    }
    else
    {
        console.log(grades[i]+" - Fail!");
    }
}