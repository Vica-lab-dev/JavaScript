let ul = document.querySelector("#posts");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data =>
{
    for(let post of data)
    {
        let li = document.createElement("li");
        li.innerHTML = post.title;

        ul.append(li);
    }
}).catch(err => console.log(err));