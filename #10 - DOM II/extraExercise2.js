let div = document.querySelector("#main");
let names = ["Petar", "Marko", "Ivan", "Jovo"];

for(let name of names)
{
    if(name.includes("a"))
    {
        let paragraph = document.createElement("p");
        paragraph.textContent = name;
        div.appendChild(paragraph);
    }
}