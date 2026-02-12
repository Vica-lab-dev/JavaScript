let ul = document.querySelector("#numberList");

let numbers = [10, 20, 30, 40, 50];

for(let number of numbers)
{
    let li = document.createElement("li");
    li.textContent = "Number: "+number;

    ul.appendChild(li);
}

