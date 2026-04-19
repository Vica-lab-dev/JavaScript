fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data =>
{
    for(let user of data)
    {
        console.log(user.name);
    }
}).catch(err => console.log(err));