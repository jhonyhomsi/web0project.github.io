var globalUser;
var globalPass;
function sign() {
    globalUser = document.getElementById("username").value
    globalPass = document.getElementById("password").value
    var url = 'https://hospital-data-users.onrender.com';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var isAuthenticated = false;
        data.forEach(user => {
            if (globalUser == user.username && globalPass == user.password) {
                isAuthenticated = true;
                console.log("Welcome " + globalUser);
                window.location.href = 'admin-panel.html?username=' + globalUser;
                //window.location.href = 'redirect.html'; // replace example.com with your desired URL
            }
        });
        if (!isAuthenticated) {
            alert("Sorry " + globalUser + ", your username or password is incorrect!");
        }
    });
}