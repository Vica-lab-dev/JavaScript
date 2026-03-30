function calculateTax(amount, tax = 0.15)
{
    let total = amount + (amount * tax);
    console.log(total);
}

calculateTax(500, 0.2);