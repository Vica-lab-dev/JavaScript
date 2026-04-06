fetch("https://jsonplaceholder.typicode.com/users/2")
.then(res => res.json())
.then(user => console.log(user.email))
    .catch(error => console.log(error));
