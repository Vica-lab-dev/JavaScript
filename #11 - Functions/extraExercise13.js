let div = document.querySelector("#container");

function printSquares(array)
{
    let ul = document.createElement("ul");

    for(let arr of array)
    {
        let li = document.createElement("li");
        li.innerText = arr * arr;
        ul.appendChild(li);
    }
    div.appendChild(ul);
}

let numbers = [1, 2, 3, 4, 5];

printSquares(numbers);