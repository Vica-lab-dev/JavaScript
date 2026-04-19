let ul = document.querySelector("#posts");

fetch("https://jsonplaceholder.typicode.com/posts/")
.then(res => res.json())
.then(data =>
{
    let qui = data.filter(post => post.title.includes("qui"));

    for(let post of qui)
    {
        let li = document.createElement("li");
        li.textContent = post.title;

        ul.append(li);
    }
}).catch(error => console.log(error));