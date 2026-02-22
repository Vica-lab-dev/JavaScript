let div = document.querySelector("#container");

function getRandomColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeAllColors(arrayID)
{
    for(let id of arrayID)
    {
        let divArray = document.createElement("div");

        divArray.id = id;
        divArray.style.backgroundColor = getRandomColor();
        divArray.style.width = "1000px";
        divArray.style.height = "100px";
        divArray.style.marginTop = "10px";

        div.appendChild(divArray);
    }
}

let  arrayID= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

changeAllColors(arrayID);