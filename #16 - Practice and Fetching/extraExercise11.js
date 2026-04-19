let div = document.querySelector("#users");

fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
.then(res => res.json())
.then(data =>
{
    for(let user of data)
    {
        let p = document.createElement("p");
        p.textContent = user.name;

        div.append(p);
    }
}).catch(err => console.log(err));