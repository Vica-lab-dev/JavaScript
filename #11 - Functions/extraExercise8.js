let div = document.querySelector("#container");

function printGreetNameYears(name, years)
{
    let paragraph = document.createElement("p");
    paragraph.textContent = "Hello "+name+", you are " + years + " years old!";
    div.appendChild(paragraph);
}

printGreetNameYears("Viktor", 27);