fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {

    let ul = document.querySelector("#style");

    data.products.forEach(product =>
    {
        let li = document.createElement("li");
        li.textContent = product.title + " - " + product.price;
        li.style.color = "blue";
        ul.appendChild(li);
    });
})
.catch(error => console.log(error));