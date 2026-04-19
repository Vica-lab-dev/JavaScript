let div = document.querySelector("#products");

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data =>
{
    let sum = 0;
    let avg = 0;

    for(let product of data.products)
    {
          sum += product.price;

    }

    avg = sum / data.products.length;

    let p = document.createElement("p");
    p.textContent = "Sum: "+sum.toFixed(2)+" - Average: "+avg.toFixed(2);
    div.append(p);
}).catch(error => console.log(error));