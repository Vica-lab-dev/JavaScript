const loggedIn = localStorage.getItem("loggedIn");
const tasks = [];

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

    console.log(tasks);
});