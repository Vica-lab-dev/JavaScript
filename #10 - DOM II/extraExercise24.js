let paragraph = document.querySelector("#count");

let grades = [3, 4, 5, 2];

let count = 0;

for(let grade of grades)
{
    if(grade > 3)
    {
        count++;

    }
}

paragraph.textContent = count;