// Select all divs with an id
var cards = document.querySelectorAll("div[id^='card']");

// Convert the NodeList to an array
var deck = Array.from(cards);

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
       // shuffledDeck[currentCard].style.maxWidth = '250px';
        currentCard++;
    }
}

// Start the display
//setInterval(displayCard, 10);


//Button next card
let button = document.querySelector('.btn');
button.addEventListener('click', () => {
    displayCard();
    button.innerHTML = 'next';
});


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
        }
    })
});


