// Select all divs with an id
var cards = document.querySelectorAll("div[id^='card']");

// Convert the NodeList to an array
var deck = Array.from(cards);

//difficulty lvl




// Shuffle function
function shuffleDeck(deck) {
    for(let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Shuffle the div elements
var shuffledDeck = shuffleDeck(deck);
console.log(shuffledDeck);

// Display the shuffled div elements one by one
var currentCard = 0;

 // Hide all the divs
function displayCard(){
    for (let i = 0; i < shuffledDeck.length; i++){
        shuffledDeck[i].style.display = 'none';
    }
    
    if (currentCard >= shuffledDeck.length){
        for (let i = 0; i < shuffledDeck.length; i++){
            shuffledDeck[i].style.display = 'block ';
            shuffledDeck[i].style.maxWidth = '150px';
        }
    } else {
        // Show the current div
        shuffledDeck[currentCard].style.display = 'block';
        currentCard++;
    }
}

//Button next card
let button = document.querySelector('.btn');
button.addEventListener('click', () => {
    displayCard();
    button.innerHTML = 'next';
});

//errors number
let errorsScore = 0;
const errors_span = document.getElementById('errorsNumber');

//card selection
let currentIndex = 0;
let title = document.querySelector('h1');

shuffledDeck.forEach(function(card) {
    card.addEventListener('click', function(){
        if (this === shuffledDeck[currentIndex]){
            currentIndex++;          
            this.classList.add('green');
            this.classList.remove('red');
            this.style.pointerEvents = "none";
            title.textContent = "Let's check your memory";
            button.innerHTML = 'play'
            if(currentIndex >= shuffledDeck.length){
                title.textContent = "Done!";
            }
        }else{
            this.classList.add('red');
            errorsScore++;
            errors_span.innerHTML = errorsScore;
        }
    })
});




//PRELOAD
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "./cards/club/2.svg",
    "./cards/club/3.svg",
    "./cards/club/4.svg",
    "./cards/club/5.svg",
    "./cards/club/6.svg",
    "./cards/club/7.svg",
    "./cards/club/8.svg",
    "./cards/club/9.svg",
    "./cards/club/10.svg",
    "./cards/club/J.svg",
    "./cards/club/Q.svg",
    "./cards/club/K.svg",
    "./cards/club/A.svg",
    "./cards/diamond/2.svg",
    "./cards/diamond/3.svg",
    "./cards/diamond/4.svg",
    "./cards/diamond/5.svg",
    "./cards/diamond/6.svg",
    "./cards/diamond/7.svg",
    "./cards/diamond/8.svg",
    "./cards/diamond/9.svg",
    "./cards/diamond/10.svg",
    "./cards/diamond/J.svg",
    "./cards/diamond/Q.svg",
    "./cards/diamond/K.svg",
    "./cards/diamond/A.svg",
    "./cards/heart/2.svg",
    "./cards/heart/3.svg",
    "./cards/heart/4.svg",
    "./cards/heart/5.svg",
    "./cards/heart/6.svg",
    "./cards/heart/7.svg",
    "./cards/heart/8.svg",
    "./cards/heart/9.svg",
    "./cards/heart/10.svg",
    "./cards/heart/J.svg",
    "./cards/heart/Q.svg",
    "./cards/heart/K.svg",
    "./cards/heart/A.svg",
    "./cards/spade/2.svg",
    "./cards/spade/3.svg",
    "./cards/spade/4.svg",
    "./cards/spade/5.svg",
    "./cards/spade/6.svg",
    "./cards/spade/7.svg",
    "./cards/spade/8.svg",
    "./cards/spade/9.svg",
    "./cards/spade/10.svg",
    "./cards/spade/J.svg",
    "./cards/spade/Q.svg",
    "./cards/spade/K.svg",
    "./cards/spade/A.svg",
    
)