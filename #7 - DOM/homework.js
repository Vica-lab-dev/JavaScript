let products = document.getElementById("products");

let ads =
    [
        {
            title: "BMW",
            price: 9936,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpqSs5B83INtu2CgxtCcDYPpAiI1Orow1zA&s"
        },
        {
            title: "Audi",
            price: 10892,
            image: "https://www.magazinauto.com/wp-content/uploads/2024/07/audi-a5-2024.jpg"
        }
    ]

for(let i in ads)
{
    products.innerHTML += ads[i]["title"] + "->" + ads[i]["price"] + "->" + ads[i]["image"] + "<br/>";
    products.style.color = "lightBlue";
    products.style.backgroundColor = "black"
}
