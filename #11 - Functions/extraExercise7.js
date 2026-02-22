let div = document.querySelector("#container");

function changeBackgroundColor(boxID, color)
{
    divID = document.createElement("div");
    divID.id = boxID;
    div.appendChild(divID);

    divID.style.backgroundColor = color;
    divID.style.width = "1000px";
    divID.style.height = "100px";
}

changeBackgroundColor("new","blue");