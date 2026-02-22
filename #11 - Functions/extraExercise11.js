let div = document.querySelector("#container");

function checkParity(number)
{
    let paragraph = document.createElement("p");

    if(number % 2 === 0)
    {
        paragraph.innerText = "Number is even!";
    }
    else
    {
        paragraph.innerText = "Number is odd!";
    }

    div.appendChild(paragraph);
}

checkParity(2);