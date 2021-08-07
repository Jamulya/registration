var form = document.getElementById('form')
var error = []
var success = ""
form.addEventListener('submit', function(e) {
  e.preventDefault()

  var username = document.getElementById('username')
  var password = document.getElementById('password')

  if (username.value == "") {
    error.push("please enter the username")
  }
  if(password.value == "") {
    error.push("Please enter the password")
  }
  alert("Form is submitted")

  var message = document.getElementById('message')

  message.innerText = error
})