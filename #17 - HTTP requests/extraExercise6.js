let users = [
    {firstName: "Viktor", lastName: "Prokic", age: 30},
    {firstName: "Marko", lastName: "Dotic", age: 20},
    {firstName: "Vuk", lastName: "Plovic", age: 33}
];

for(let user of users)
{
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }).then(res => res.json())
        .then(data => console.log("Created ID: "+data.id))
        .catch(err => console.log(err));
}