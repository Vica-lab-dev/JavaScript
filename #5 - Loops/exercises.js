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

let fruits = ["banana", "apple", "kiwi", "pomorange", "mango"];

for(let i = 0; i < fruits.length; i++)
{
switch(fruits[i])
    {
        case "banana":
            console.log(fruits[i]+" is yellow!");
            break;

        case "apple":
            console.log(fruits[i]+" is red!");
            break;

        case "kiwi":
            console.log(fruits[i]+" is green!");
            break;

        case "pomorange":
            console.log(fruits[i]+" is orange!");
            break;

        default:
            console.log(fruits[i]+" - is not available!");
    }
}

let book =
    {
        "Harry Potter":
            {
                title: "Harry Potter",
                author: "JK Rowling",
                year: 21,
                genre: "Scfi",
            },

        "The Great Gatsby":
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                year: 2002,
                genre: "Novel",
            }
    }

for(i in book)
{
    if(book[i]["year"] < 2000)
    {
        console.log(i+" is old book!");
    }
    else
    {
        console.log(i+" is new book!");
    }
}

let employees =
    [
        {
            name: "John",
            salary: 51000,
        },

        {
           name: "Marta",
           salary: 38000,
        },

        {
            name: "Vick",
            salary: 26000,
        }
    ]

for(let i = 0; i < employees.length; i++)
{
    if(employees[i]["salary"] >= 50000)
    {
        console.log(employees[i]["name"]+" has a high salary!");
    }
    else if(employees[i]["salary"] >= 30000 && employees[i]["salary"] < 50000)
    {
        console.log(employees[i]["name"]+" has a medium salary!");
    }
    else
    {
        console.log(employees[i]["name"]+" has a low salary!");
    }
}

let cities = ["New York", "Belgrade", "Paris"];

for(let i = 0; i < cities.length; i++)
{
    switch(cities[i])
    {
        case "New York":
            console.log("Welcome to New York!");
            break;

        case "Belgrade":
            console.log("Welcome to Belgrade!");
            break;

        case "Paris":
            console.log("Welcome to Paris!");
            break;
    }
}