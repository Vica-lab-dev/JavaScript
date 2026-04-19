let select = document.querySelector("#users")

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data =>
{
    for(let user of data)
    {
        let option = document.createElement("option");
        option.textContent = user.name;

        select.append(option);
    }
}).catch(error => console.log(error));