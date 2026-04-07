fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {

    let select = document.querySelector("#names");

    data.forEach(user => {
        let option = document.createElement("option");
        option.textContent = user.name;
        select.appendChild(option);
    });
})
.catch(error => console.log(error));