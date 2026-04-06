fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {

    let qui = data.filter(incQui => incQui.title.includes("qui"));

    let ul = document.querySelector("#qui");

    qui.forEach(qu => {
        let li = document.createElement("li");
        li.textContent = qu.title;
        ul.appendChild(li);
    });
})
.catch(err => console.log(err));