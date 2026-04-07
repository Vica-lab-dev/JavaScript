fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {

    let div = document.querySelector("#users");

    data.forEach(user => {
        let p = document.createElement("p");
        p.innerText = "Name: " + user.name + ", Email: " + user.email;
        div.appendChild(p);
    });
})
.catch(error => console.log(error));