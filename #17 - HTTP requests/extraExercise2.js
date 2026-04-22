let div = document.querySelector("#result");
let form = document.querySelector("#information");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let job = document.querySelector("#job").value;

    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: name,
            job: job,
        })
    })
        .then(res => res.json())
    .then(data => {
        div.innerHTML = "ID: "+data.id+" - Created At: "+data.createdAt;
    }).catch(err => console.log(err));
})
