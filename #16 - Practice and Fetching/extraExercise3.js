let ul = document.querySelector("#todos");

fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(data =>
{
    let completed = data.filter(todo => todo.completed === true);

    for(let todo of completed)
    {
        let li = document.createElement("li");
        li.innerHTML = todo.title + ", completed: "+ todo.completed;

        ul.append(li);
    }
}).catch(err => console.log(err));