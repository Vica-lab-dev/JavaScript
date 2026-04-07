fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {

    let ul = document.querySelector("#products")

    let firstLetter = data.products.filter(item => item.title.startsWith("C"));

    firstLetter.forEach(item =>
    {
        let li = document.createElement("li");
        li.textContent = item.title;
        ul.appendChild(li);
    });

})
.catch(err => console.log(err));