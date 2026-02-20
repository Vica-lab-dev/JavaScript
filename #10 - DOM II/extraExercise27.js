let div = document.querySelector("#names");

let names = ["Ana", "Maja", "Ivan", "Milan", "Luka"];

for(let name of names)
{
    let paragraph = document.createElement("p");

    if(name === "Ivan")
    {
        continue;
    }

    paragraph.textContent = "Name: "+name;

    div.appendChild(paragraph);
}
