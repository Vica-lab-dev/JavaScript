function calculateTax(amount, tax = 0.15)
{
    let total = amount + (amount * tax);
    console.log(total);
}

calculateTax(500, 0.2);

function getFullName(firstName, lastName, middleName = '')
{
    console.log(firstName+" "+middleName+" "+lastName);
}

getFullName("Viktor", "Nenad", "Maletkovic");

getFullName("Viktor","Maletkovic");