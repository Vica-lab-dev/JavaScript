fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {

    let ul = document.querySelector("#title");

    data.forEach(post =>
    {
        let shortTitle = post.title.split(" ").slice(0, 3).join(" ");
        let li = document.createElement("li");
        li.textContent = shortTitle;
        ul.appendChild(li);
    });
})
.catch(err => console.log(err));