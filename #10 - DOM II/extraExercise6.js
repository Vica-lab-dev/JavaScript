let div = document.querySelector(".container");

let products = ["Milk", "Bread", "Cheese"];

for(let product of products)
{
    let li = document.createElement("li");
    let inStock = Math.floor(Math.random() * 100);
    li.textContent = "In stock: "+inStock;

    div.appendChild(li);
}