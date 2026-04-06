fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {

    let expensive = data.products.filter(product => product.price > 500)
    let ul = document.querySelector("#price");

    expensive.forEach(product => {
        let li = document.createElement("li");
        li.textContent = `${product.title} - $${product.price}`
        ul.appendChild(li);
    });
})

.catch(err => console.log(err));