let mainDiv = document.querySelector("#posts");

fetch("https://jsonplaceholder.typicode.com/posts/")
.then(res => res.json())
.then(data =>
{
    console.log(data)

    for(let post of data)
    {
        let div = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.innerText = post.title;

        let p = document.createElement("p");
        p.innerText = post.body.slice(0, 20)+"...";

        div.append(h3, p);
        mainDiv.append(div);
    }
}).catch(error => console.log(error));