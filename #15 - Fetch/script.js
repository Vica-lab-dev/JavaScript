let productsHolder = document.querySelector('#products');
let searchProduct = document.querySelector('#searchProduct');

searchProduct.addEventListener('click', function()
{
    let searchText = document.querySelector('#searchText');
    let searchLink = 'https://dummyjson.com/products/search?q='+searchText.value;

    fetch(searchLink)
        .then(res => res.json())
        .then(data =>
        {
            productsHolder.innerHTML = '';
            for(let product of data.products)
            {
                appendProductToHolder(product);
            }
        });
})

fetch("https://dummyjson.com/products?limit=20&sortBy=price&order=desc")
.then(function(response)
{
    if(response.ok)
    {
        console.log("API success!");
    }
    return response.json();
})
    .then(function(data){

        let div = document.querySelector("#products");

        for(let product of data.products)
        {
            appendProductToHolder(product);
        }
    })

function appendProductToHolder(product)
{
    let singleProduct = document.createElement("div");

    let productTitle = document.createElement("h1");
    productTitle.innerText = product.title;

    let productCategory = document.createElement("p");
    productCategory.innerText = product.category;

    let productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    singleProduct.append(productTitle, productCategory, productPrice);

    productsHolder.append(singleProduct);
}