let mainDiv = document.querySelector("#products");

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data =>
{
    let firstLetter = data.products.filter(product => product.title.startsWith("R"));

    for(let product of firstLetter)
    {
        let div = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.innerText = product.title;

        let p = document.createElement("p");
        p.innerText = product.price;

        div.append(h3, p);

        mainDiv.append(div);
    }
}).catch(error => console.log(error));