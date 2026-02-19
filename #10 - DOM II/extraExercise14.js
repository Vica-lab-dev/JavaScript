let ul = document.querySelector("#even");

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let number of numbers)
{
    if(number % 2 === 0)
    {
        if(number === 0)
        {
            continue;
        }

        let li = document.createElement("li");
        li.textContent = number;
        ul.appendChild(li);
    }
}