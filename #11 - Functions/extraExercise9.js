let div = document.querySelector("#container");
function printLists(array)
{
    let ul = document.createElement("ul");

    for(let arr of array)
    {
        let li = document.createElement("li");
        li.textContent = arr;
        ul.appendChild(li);
    }
    div.appendChild(ul);
}

let arrayList = ["Marko", "Darko", "Ivana"];

printLists(arrayList);