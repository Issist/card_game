let btn_start = document.querySelector('.btn_start');
let btn_next = document.querySelector('.btn_next');
let btn_restart = document.querySelector('.btn_restart');
let gameover = document.querySelector('.modal');

//RANGESLIDER
var slider = document.getElementById("slider");
var valueDisplay = document.getElementById("valueDisplay");

slider.addEventListener("input", function() {
  valueDisplay.innerHTML = slider.value;
});


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

//START GAME
btn_start.addEventListener('click', () => {
    // Shuffle the div elements
    var shuffledDeck = shuffleDeck(deck).slice(52-slider.value);
    console.log(shuffledDeck);
    // Display the shuffled div elements one by one
    var currentCard = 0;

    //Hide start button show next button
    btn_start.style.display = 'none';
    btn_next.style.display = 'flex';
    slider.style.display = 'none';
    btn_restart.style.display = 'block';
    valueDisplay.style.display = 'none';
    // Hide all the divs
    function displayCard(){
        for (let i = 0; i < shuffledDeck.length; i++){
            shuffledDeck[i].style.display = 'none';
        }
        
        if (currentCard >= shuffledDeck.length){
            for (let i = 0; i < shuffledDeck.length; i++){
                var w = document.documentElement.clientWidth || window.innerWidth;
                if(w<=480){
                    shuffledDeck[i].style.display = 'block ';
                    shuffledDeck[i].style.maxWidth = '60px';
                    btn_next.style.display = 'none';
                }else{
                    shuffledDeck[i].style.display = 'block ';
                    shuffledDeck[i].style.maxWidth = '120px';
                    btn_next.style.display = 'none';

                }
            }
        } else {
            // Show the current div
            shuffledDeck[currentCard].style.display = 'block';
            currentCard++;
        }
    }
    displayCard();
    //Button next card
    btn_next.addEventListener('click', () => {
        displayCard();
        title.textContent = "Let's check your memory";
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
                if(currentIndex >= shuffledDeck.length){
                    title.textContent = "Done! Play again after 3s :)";
                    setTimeout(() => {
                      location.reload();  
                    }, 3000);                   
                }
            }else{
                this.classList.add('red');
                errorsScore++;
                errors_span.innerHTML = errorsScore;
                if(errorsScore === 3){                    
                    gameover.style.display = 'block';   
                    gameover.innerHTML = 'GAME OVER!!!<br>Try better next time.<br><img id="gameover_img" src="./cards/gameover.png">';
                    setTimeout(() => {
                        location.reload();  
                        }, 2000); 
                }}
        });
    });
});


//RESTART GAME
btn_restart.addEventListener('click', () => {
    gameover.style.display = 'block';
    gameover.innerHTML = 'Oh, here we go again<br><img id="gameover_img" src="./cards/restart.jpg">';
    setTimeout(() => {
        location.reload();  
        }, 1000); 
        
})
//MOBILE SIZE

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