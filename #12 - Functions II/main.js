function calculateTax(amount, tax = 0.15)
{
    return amount + (amount * tax);
}

calculateTax(500, 0.2);

function getFullName(firstName, lastName, middleName = '')
{
    return firstName+" "+middleName+" "+lastName;
}

let viktor = getFullName("Viktor", "Maletkovic", "Nenad");

let ivan = getFullName("Ivan","Miskovic");

console.log(viktor, ivan);