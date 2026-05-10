const loggedIn = localStorage.getItem("loggedIn");

if(loggedIn === null){
    window.location.href = "index.html";
}