fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    let products = data.products;

    let total = products.reduce((sum, product) => sum + product.price, 0);

    let average = total /products.length;

    let p = document.querySelector("#avgPrice");
    p.innerText = average;
})
.catch(err => console.log(err));