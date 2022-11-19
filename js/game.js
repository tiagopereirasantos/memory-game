var grid = document.querySelector(".grid");

var spanPlayer = document.querySelector(".player");
var spanTimer = document.querySelector(".timer ");

var characters = [
  "angela",
  "dwight",
  "jim",
  "kelly",
  "kevin",
  "michael",
  "oscar",
  "pam",
  "phyllis",
  "ryan",
  "stanley",
  "toby",
]

resumeGame()

function createElement(tag, className){
  var element = document.createElement(tag);
  element.className = className;
  return element;
}

function createCard(character){

  var card = createElement("div", "card");
  var front = createElement("div", "front face");
  var back = createElement("div", "back face");
  
  front.style.backgroundImage = `url(/images/${character}.png)`
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;

}

function loadGame(){

  var duplicateCharacters = [...characters, ...characters]

  var shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach(function(character){
    
    var card = createCard(character);

    grid.appendChild(card);
  })
}

function checkCards(){

  var firstCharacter = firstCard.getAttribute("data-character");
  var secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter == secondCharacter){
      firstCard.firstChild.classList.add("disabled-card");
      secondCard.firstChild.classList.add("disabled-card");

      resumeGame();
      checkEndGame();

      return;
  } else{

    setTimeout(function (){
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      resumeGame();
       
    }, 500);
   
  }

}

function revealCard(event){

  console.log(event.target)

  var selectedCard = event.target.parentNode;

  if (selectedCard.className.includes("reveal-card")){
    return;
  }

  if (firstCard == ``){
    selectedCard.classList.add("reveal-card");
    firstCard = selectedCard;
  }

  else if (secondCard == ``){
    selectedCard.classList.add("reveal-card");
    secondCard = selectedCard;

    checkCards();
  }

}

function resumeGame(){

  firstCard  = ``;
  secondCard  = ``;
}

function checkEndGame(){
  
  var disabledCards = document.querySelectorAll(".disabled-card");

  if (disabledCards.length == 24 ){
    clearInterval(this.loop); 
    alert(`Parabéns, ${spanPlayer.innerHTML}! Voc finalizou o jogo em ${spanTimer.innerHTML} s.`);
  }
}

function startTimer (){
  this.loop = setInterval( function handleTimer(){
    var currentTimer = Number(spanTimer.innerHTML);
    spanTimer.innerHTML = (currentTimer + 1);
  }, 1000);
}

window.onload = () => {
  
  var playerName = localStorage.getItem("player");

  spanPlayer.innerHTML = playerName;
  loadGame();
  startTimer();

}
