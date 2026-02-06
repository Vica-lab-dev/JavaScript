let products = ["bread", "milk", "onion"];

for(let product in products)
{
    console.log(products[product]);
}

let cart =
    [
        {
            name: "Bread",
            price: 99,
            amount: 1
        },

        {
            name: "Onion",
            price: 150,
            amount: 3
        },

        {
          name: "Milk",
          price: 250,
          amount: 1
        }
    ]

for(let price in cart)
{
    console.log(cart[price]["price"])
}