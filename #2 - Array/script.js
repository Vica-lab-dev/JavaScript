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
        hobbies: ["programming", "fishing"],
    };

console.log(personalID.name, personalID.dateOfBirth);

personalID.height = 186.2;
console.log(personalID)

console.log(personalID.hobbies[0]);

let sentence = personalID.name+" has gone "+personalID.hobbies[1];
console.log(sentence);

let shop =
    {
        name: "Shopping Center",
        products: ["laptop", "smartphone", "headphones"],
        openingHours: "08",
        closingHours: "22",
    }

    console.log("In the "+shop.name+" you can buy a "+shop.products[0]+" from "+shop.openingHours+" AM to "+shop.closingHours+" PM.")

let names = [];
names.push("Maria", "Peter", "Joseph");

console.log(names);

let components = ["monitor", "keyboard", "mouse"];
components = [];
console.log(components);


let trees = ["oak", "pine", "maple"];
trees.splice(0, trees.length);
console.log(trees);

let books = ["Harry Potter", "The Great Gatsby", "To Kill a Mockingbird"];
books.unshift("1984");
console.log(books);
