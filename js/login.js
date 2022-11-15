var loginInput = document.querySelector(".login-input");
var loginButton = document.querySelector(".login-button");
var loginForm = document.querySelector(".login-form");

/*
const audio = new Audio('meu_audio.mp3');
audio.play();
*/
 
function validateInput (event){
  var inputLength = event.target.value.length;
  if (inputLength > 2 ){
    loginButton.removeAttribute("disabled");
  }
  else {
    loginButton.setAttribute("disabled", "");
  }
}

function handleSubmit(event){
  event.preventDefault();

  localStorage.setItem('player', loginInput.value); 
  location = "pages/game.html"
}

loginInput.addEventListener("input", validateInput);
loginForm.addEventListener("submit", handleSubmit);d