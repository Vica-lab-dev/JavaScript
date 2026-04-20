let div = document.querySelector("#delete");


for(let i = 18; i <= 100; i++)
{
    let ageOption = document.createElement("option");
    ageOption.innerText = i;
    document.querySelector("#age").append(ageOption);
}

document.querySelector("#register").addEventListener('click', function()
{
    let name = document.querySelector("#name").value;
    let lastName = document.querySelector("#lastName").value;
    let age = document.querySelector("#age").value;

    if(name.trim() === "" || lastName.trim() === "")
    {
        alert("Please fill in all fields");
        return;
    }

    register(name,lastName, age);

});

function register(name, lastName, age)
{
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            firstName: name,
            lastName: lastName,
            age: age
        })
    })
        .then(response => response.json())
    .then(data =>
    {
        alert("Successfully registered as "+data.firstName);

        if(data?.id)
        {
            let a = document.createElement("a");
            a.href = "delete.html?id=" + data.id;
            a.textContent = "Delete user";
            a.style.color = "red";

            div.append(a);
        }
    })
}

fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
            expireInMins: 30,
        }),
    })
.then(response => response.json())
.then(data =>
{
    console.log(data)
})