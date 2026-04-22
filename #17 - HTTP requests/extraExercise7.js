let form = document.querySelector("#form");
let ul = document.querySelector("#information");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let title = document.querySelector("#title");
    let bodyContent = document.querySelector("#body");

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: title.value,
            body: bodyContent.value
        }),
    }).then(res => res.json())
        .then(data => {
            let li = document.createElement("li");
            li.textContent = "Title: "+data.title+" - Body: "+data.body;

            ul.append(li);
        }).catch(error => console.log(error))
})