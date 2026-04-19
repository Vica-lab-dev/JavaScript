let ul = document.querySelector("#prices");

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(data =>
{
    let prices = data.products.filter(product => product.price > 500);

    for(let product of prices)
    {
        let li = document.createElement("li");
        li.innerHTML = product.title +", price: "+ product.price;
        ul.append(li);
    }
}).catch(error => console.log(error));