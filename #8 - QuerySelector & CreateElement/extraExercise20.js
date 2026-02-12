let ul = document.querySelector("#grades");

let grades = [5, 4, 3, 2, 1];

for(let grade of grades)
{
    let li = document.createElement("li");

    if(grade === 5)
    {
        li.textContent = "Excellent";
    }
    else if(grade === 3 || grade === 4)
    {
        li.textContent = "Good";
    }
    else if(grade === 2 || grade === 1)
    {
        li.textContent = "Fail";
    }
    else
    {
        li.textContent = "Undefined grade";
    }

    ul.appendChild(li);
}