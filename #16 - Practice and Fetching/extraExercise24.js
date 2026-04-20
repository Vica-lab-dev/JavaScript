let ul = document.querySelector("#address");

fetch("https://jsonplaceholder.typicode.com/users/")
.then(res => res.json())
.then(data =>
{
    let userAddress = data.filter(user => user.address.city.startsWith("S"));

    for(let user of userAddress)
    {
        let li = document.createElement("li");
        li.textContent = user.name+" - "+user.address.city;

        ul.append(li);
    }
}).catch(err => console.log(err))