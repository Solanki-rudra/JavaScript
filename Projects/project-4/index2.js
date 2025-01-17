const cards = document.querySelectorAll(".card");
console.log(cards);

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  // console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);

    console.log(secondCard);
    checkIt();
  }
}

function checkIt() {
  // console.log("Checking");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}
function success() {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  // console.log("failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}
(function shuffle() {
    cards.forEach((card) =>{
        var index = Math.floor(Math.random()*16);
        card.style.order = index
    })   
})();
