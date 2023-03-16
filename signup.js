function Login()
{
var username = document.getElementById('TxtUserName').value;
var pwd = document.getElementById('TxtPassword').value;
    // To Send Data
   fetch('http://localhost:3030/Login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"username": username, "pwd": pwd})
  });
}