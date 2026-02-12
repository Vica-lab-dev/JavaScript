let ul = document.querySelector("#numberList");

let numbers = [10, 20, 30, 40, 50];

for(let number in numbers)
{
    let li = document.createElement("li");
    li.textContent = "Number: "+numbers[number];

    ul.appendChild(li);
}

