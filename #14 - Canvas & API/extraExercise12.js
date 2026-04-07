fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data => {
    let completed = data.filter(todo => todo.completed === true);

    let ul = document.querySelector("#todos");

    data.forEach(e =>
    {
        let li = document.createElement("li");
        li.textContent = e.title;
        ul.appendChild(li);
        if(e.completed)
        {
            li.classList.add("completed");
        }
    });
})
.catch(err => console.log(err));