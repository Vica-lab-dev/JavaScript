let paragraph = document.querySelector("#avg");

let grades = [1, 3, 5, 2, 4];

let sum = 0;

for(let grade of grades)
{
    sum += grade;
}

paragraph.textContent = sum / grades.length;