let ul = document.querySelector("#names");

let names = ["Ana", "Marko", "Ivan", "Vik"];

for(let name of names)
{
    let li = document.createElement("li");

    if(name.length > 3)
    {
        li.textContent = name;
        ul.appendChild(li);
    }
}