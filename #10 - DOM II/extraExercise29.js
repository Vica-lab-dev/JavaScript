let div = document.querySelector("#boxesContainer");

let numbers = [2, 5, 10, 11, 15, 17, 20];

for(let number of numbers)
{
    let paragraph = document.createElement("p");

    switch (number)
    {
        case 2:
            paragraph.textContent = "2 is not divisible by 5!";
            break;
        case 5:
            paragraph.textContent = "5 is divisible by 5!";
            break;
        case 10:
            paragraph.textContent = "10 is divisible by 5!";
            break;
        case 11:
            paragraph.textContent = "11 is not divisible by 5!";
            break;
        case 15:
            paragraph.textContent = "15 is divisible by 5!";
            break;
        case 17:
            paragraph.textContent = "17 is not divisible by 5!";
            break;
        case 20:
            paragraph.textContent = "20 is divisible by 5!";
            break;
    }
    div.appendChild(paragraph);
}