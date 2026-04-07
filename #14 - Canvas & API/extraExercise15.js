fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {

    let lengthUsername = data.filter(user => user.username.length > 5);
    let count = lengthUsername.length;

    let p = document.querySelector("#username");
    p.textContent = count;
})
.catch(err => console.log(err));