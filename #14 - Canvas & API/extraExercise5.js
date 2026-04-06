fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(todos =>
{
    let completed = todos.filter(todo => todo.completed === true);

    let ul = document.querySelector("#completed");

    completed.forEach(todo =>
    {
        let li = document.createElement("li");
        li.textContent = todo.title;
        ul.appendChild(li);
    });
})

.catch(err => console.log(err));