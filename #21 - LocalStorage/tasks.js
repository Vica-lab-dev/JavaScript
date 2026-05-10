const loggedIn = localStorage.getItem("loggedIn");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if(loggedIn === null){
    window.location.href = "index.html";
}

const taskList = document.querySelector("#taskList");

if(tasks.length >= 1) {
    for(let task of tasks){
        let singleTask = document.createElement("div");

        let taskName = document.createElement("p");
        taskName.innerText = task.name;

        let deleteTask = document.createElement("button");
        deleteTask.setAttribute("data-task-id", task.id);
        deleteTask.innerText = "Delete task";

        singleTask.append(taskName, deleteTask);
        taskList.append(singleTask);
    }
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

});