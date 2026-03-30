function calculateTax(amount, tax)
{
    let taxTotal = amount * tax;
    let total = amount + taxTotal;
    console.log(total);
}

calculateTax( 500, 0.2);