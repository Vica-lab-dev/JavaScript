let div = document.querySelector("#mainDiv");
let button = document.querySelector("#button")

button.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: "Test",
            body: "Content",
            userId: 1
        })
    }).then(res => res.json())
    .then(data => {
        let p = document.createElement('p');
        p.innerText = "Created ID: "+data.id;
        div.append(p);
    })
        .catch(err => console.log(err));
})