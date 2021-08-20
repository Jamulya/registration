var name;
var pass;
var btn = document.getElementById("btn");

function Login(username, password) {
  this.username = username;
  this.password = password;
}

var users = [
  new Login("Jama", "123"),
  new Login("Jama2", "123"),
  new Login("Jama3", "12"),
];

btn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  if (name.length <= 0 || pass.length <= 0) {
    console.log("%c заполните все поля", "background: #222; color: red");}
  
  let user = users.find((user) => {
    if (user.username === name && user.password === pass) {
      return user;
    }
  });
  if (user === undefined) {
    console.log(
      "%c Студент с таким логином не авторизован ",
      "background: #222; color: yellow"
    );
  } else {
    alert(`${user.username} Добро пожаловать в личный кабинет`);
  }
});
