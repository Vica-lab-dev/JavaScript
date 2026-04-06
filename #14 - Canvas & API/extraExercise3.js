fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data =>
{
    let div = document.querySelector("#products");

    data.products.forEach(name => {
        let paragraph = document.createElement("p");
        paragraph.innerText = name.title;
        div.appendChild(paragraph);
    });
})

.catch(error => console.log(error));