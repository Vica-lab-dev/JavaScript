fetch("https://api.thecatapi.com/v1/breeds")
.then(res => res.json())
.then(data =>
{
    let select = document.querySelector("#breed");

    data.forEach(cat =>
    {
        let option = document.createElement("option");
        option.textContent = cat.name;
        select.appendChild(option);
    });
})
.catch(err => console.log(err));