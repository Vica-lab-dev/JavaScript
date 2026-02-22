let div = document.querySelector("#container");

function getRandomColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


function printArrayInDiv(array, divID)
{
    let newDiv = document.createElement("div");
    newDiv.id = divID;
    newDiv.style.width = "1000px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = getRandomColor();

    for(let arr of array)
    {
        let paragraph = document.createElement("p");
        paragraph.innerText = arr;
        paragraph.style.fontSize = "30px";
        paragraph.style.textAlign = "center";
        newDiv.appendChild(paragraph);
    }

    div.appendChild(newDiv);
}

let array = ["firstParagraph", "secondParagraph"];

printArrayInDiv(array, 1);
printArrayInDiv(array, 5);