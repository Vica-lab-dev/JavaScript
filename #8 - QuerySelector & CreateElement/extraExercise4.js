let p = document.getElementById("sum");
let grades = [5, 4, 3, 2, 5, 1, 10];
let sum = 0;

for(let grade of grades)
{
    sum += grade;
}

p.textContent = sum;