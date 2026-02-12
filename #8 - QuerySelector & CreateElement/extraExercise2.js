let ul = document.getElementById("list");
let names = ["Ana", "Marko", "Jovan"];

for(let name of names)
{
    let li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
}