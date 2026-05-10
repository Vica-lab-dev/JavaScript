const loggedIn = localStorage.getItem("loggedIn");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

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

});