let div = document.querySelector("#container");

function printGrades(grades) {
    for (let grade of grades)
    {
        let paragraph = document.createElement("p");

        if(grade === 5)
        {
            paragraph.innerText = grade+" - Excellent!";
        }
        else if(grade === 4)
        {
            paragraph.innerText = grade+" - Very good!";
        }
        else if(grade === 3)
        {
            paragraph.innerText = grade+" - Good!";
        }
        else if(grade === 2)
        {
            paragraph.innerText = grade+" - Pass!";
        }
        else if(grade === 1)
        {
            paragraph.innerText = grade+" - Fail!";
        }
        else
        {
            paragraph.innerText = grade + " - Invalid grade!";
        }

        div.appendChild(paragraph);
    }
}

let grades = [0,1,2,3,4,5,6];

printGrades(grades);