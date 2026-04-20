let ul = document.querySelector("#products");

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data =>
{
    console.log(data)
    for(let product of data.products)
    {
        let li = document.createElement("li");
        li.textContent = "Title: "+product.title+" - Price: "+product.price;

        ul.append(li);
    }
}).catch(error => console.log(error));