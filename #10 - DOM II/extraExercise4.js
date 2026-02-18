let div = document.querySelector("#main");

let numbers = [3, 6, 9, 12, 15, 17,];

for(let number of numbers)
{
    if(number % 3 === 0)
    {
        let li = document.createElement("li");
        li.textContent = number;
        div.appendChild(li);
    }
}