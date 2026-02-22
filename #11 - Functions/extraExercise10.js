let div = document.querySelector("#container");

function addTitle(text)
{
    let h2 = document.createElement("h2");
    h2.innerText = text;
    div.appendChild(h2);
}

addTitle("Welcome!");