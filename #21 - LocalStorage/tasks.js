const loggedIn = localStorage.getItem("loggedIn");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

showTasks();

if(loggedIn === null){
    window.location.href = "index.html";
}


document.querySelector("#createTask").addEventListener("click", function () {
    const taskName = document.querySelector("#taskName").value;
    const dateTime = new Date();
    const id = dateTime.getTime();

    tasks.push({
        id: id,
        name: taskName,
    });

    const jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("tasks", jsonTasks);
    showTasks();
});

function showTasks(){

    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = '';

    if(tasks.length >= 1) {
        for(let task of tasks){
            let singleTask = document.createElement("div");

            let taskName = document.createElement("p");
            taskName.innerText = task.name;

            let deleteTask = document.createElement("button");
            deleteTask.innerText = "Delete task";

            deleteTask.addEventListener("click", function () {
                tasks = tasks.filter(filterTask => filterTask.id !== task.id);
                showTasks();

                localStorage.setItem("tasks", JSON.stringify(tasks));
            })

            singleTask.append(taskName, deleteTask);
            taskList.append(singleTask);
        }
    }
}