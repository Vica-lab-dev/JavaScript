fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data =>
{
    let ul = document.querySelector("#name");

    data.forEach(cat =>
    {
        let li = document.createElement("li");
        li.textContent = cat.name;
        ul.appendChild(li);
    });
})
.catch(err => console.log(err));