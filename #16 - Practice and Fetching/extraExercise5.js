let mainDiv = document.querySelector("#products");

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data =>
{
    for(let product of data.products)
    {
        let div = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.innerText = "Title: "+product.title;

        let p = document.createElement("p");
        p.innerText = "Price: "+product.price;

        div.append(h3, p);

        mainDiv.append(div);
    }
}).catch(error => console.log(error));