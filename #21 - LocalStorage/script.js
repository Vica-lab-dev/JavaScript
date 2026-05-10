const loggedIn = localStorage.getItem('loggedIn');
if(loggedIn === null) {
    document.querySelector('#loginForm').style.display = "block";
} else{
    document.querySelector("#logoutButton").style.display = "block";
}

document.querySelector("#logoutButton").addEventListener("click", function(){
   localStorage.removeItem('loggedIn');
   window.location.reload();
});

document.querySelector("#loginButton").addEventListener("click", function () {
    const username = document.querySelector("#username").value.trim().toLowerCase();
    const password = document.querySelector("#password").value.trim();

    if(username !== "admin" || password !== "123456") {
        return alert("Failed to login");
    }

    localStorage.setItem("loggedIn", true);
    window.location.reload();
});

