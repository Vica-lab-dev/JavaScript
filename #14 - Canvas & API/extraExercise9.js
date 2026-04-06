fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data =>{
    let suite = data.filter(user => user.address.suite.includes("Suite"));

    let ul = document.querySelector("#suite");

    suite.forEach(suit =>
    {
        let li = document.createElement("li");
        li.textContent = suit.name;
        ul.appendChild(li);
    });
})
.catch(err => console.log())