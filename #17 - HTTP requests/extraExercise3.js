fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        firstName: "Peter",
        lastName: "Petrovic",
        age: 25
    })
}).then(res => res.json())
.then(data => console.log(data))