let ul = document.querySelector("#products");

fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(data =>
{
    let rating = data.products.filter(product => product.rating >= 4);

    for(let prod of rating)
    {
        let li = document.createElement("li");
        li.innerHTML = prod.title+" - Rating: "+prod.rating;

        ul.append(li);
    }
}).catch(error => console.log(error));