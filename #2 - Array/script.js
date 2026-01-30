let products = ["bread", "milk", "yogurt"];
console.log(products, products[1]);

products.push("Newspaper")
console.log(products);

products.splice(0, 1);
console.log(products);

let cars = ["BMW", "Audi", "Mercedes"];
console.log(cars)
cars[0] = "Zastava";
console.log(cars);

cars.sort()
console.log(cars)

let personalID =
    {
        name: "Viktor",
        lastName: "Maletkovic",
        dateOfBirth: "15/04/1998",
    };

console.log(personalID.name, personalID.dateOfBirth);