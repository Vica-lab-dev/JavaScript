let ul = document.querySelector("#odd");

let numbers = [1, 3, 5, 7, 9, 10];

for(let number of numbers)
{
    let li = document.createElement("li");
    if(number % 2 === 1)
    {
        li.textContent = number;
        ul.appendChild(li);
    }
}