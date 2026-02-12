let ul = document.querySelector("#numberList");

let numbers = [2, 4, 6, 8, 10, 100];

for(let number of numbers)
{
    let square = number * number;

    let li = document.createElement("li");
    li.textContent = square;

    ul.appendChild(li);
}