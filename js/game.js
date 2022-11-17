var grid = document.querySelector(".grid");

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

  return card;

}


function loadGame(){

  var duplicateCharacters = [...characters, ...characters]

  var shuffledArray = duplicateCharacters.sort(() =>Math.random() -0.5);

  shuffledArray.forEach(function(character){
    
    var card = createCard(character);

    grid.appendChild(card);
  })
}

loadGame()