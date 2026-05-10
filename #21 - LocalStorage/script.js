const loggedIn = localStorage.getItem('loggedIn');
if(loggedIn === null) {
    document.querySelector('#loginForm').style.display = "block";
} else{
    document.querySelector("#logoutButton").style.display = "block";
}

document.querySelector("#loginButton").addEventListener("click", function () {
    const username = document.querySelector("#username").value.trim().toLowerCase();
    const password = document.querySelector("#password").value.trim();

    if(username !== "admin" || password !== "123456") {
        alert("Failed to login");
    }

    localStorage.setItem("loggedIn", true);
});

