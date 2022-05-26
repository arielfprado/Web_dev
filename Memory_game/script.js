const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; /*to prevent from clicking another card while they are unflipping*/


function flipCard() {
    if(lockBoard) return; /*to prevent from clicking another card while they are unflipping*/
    if(this === firstCard) return; /*to prevent from selecting the same card twice*/

    this.classList.add("flip");

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        firstCard.classList.add('match');
        secondCard.classList.add('match');
        
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click',flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true; /*to prevent from clicking another card while they are unflipping*/

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    },1500/*in ms*/);
}

function resetBoard() {
    [hasflippedCard, lockBoard] = [false,false];
    [firstCard, secondCard] = [null, null];
}

/*immediatle invoked function - to shuffle the cards i the beggining of each session*/
(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random()*12);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})


