fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    let mainDiv = document.querySelector("#main");

    data.forEach(post =>
    {
        let div = document.createElement("div");

        let h3 = document.createElement("h3");

        h3.textContent = post.title;

        let p = document.createElement("p");
        p.textContent = post.body.slice(0, 20)+"...";

        div.appendChild(h3);
        div.appendChild(p);
        mainDiv.appendChild(div);
    });
})
.catch(err => console.log(err));