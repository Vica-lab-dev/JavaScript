let div = document.querySelector("#result");

let grades = [5, 4, 3, 2, 1];

for(let grade of grades)
{
    let paragraph = document.createElement("p");
    if(grade === 5)
    {
        paragraph.textContent = grade+" - Excellent!";
    }
    else if(grade === 4)
    {
        paragraph.textContent = grade+" - Very good!";
    }
    else if(grade === 3)
    {
        paragraph.textContent = grade+" - Good!";
    }
    else if(grade === 2)
    {
        paragraph.textContent = grade+" - Pass!";
    }
    else if(grade === 1)
    {
        paragraph.textContent = grade+" - Fail!";
    }
    else
    {
        paragraph.textContent = grade+" - Invalid grade!";
    }

    div.appendChild(paragraph);
}