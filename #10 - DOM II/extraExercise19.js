let ul = document.querySelector("#fruits");

let fruits = ["Apple", "Banana", "Orange", "Pear"];

for(let i = 0; i < fruits.length; i++)
{
    let li = document.createElement("li");
    if(fruits[i].length >= 5)
    {
        li.textContent = fruits[i]+" has exactly "+fruits[i].length+" characters!";
    }
    else
    {
        continue;
    }
    ul.appendChild(li);
}