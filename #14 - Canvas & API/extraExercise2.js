fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
    {
        let ul = document.querySelector("#ul");

        posts.forEach(post => {
            let li = document.createElement("li");
            li.textContent = post.title
            ul.appendChild(li);
        });
    })

.catch(error => console.log(error));




