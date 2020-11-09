/*-----------------------START-FRAME-------------------------*/

document.getElementById("start-button").addEventListener("click", function() {
    //Toggle hide class
    document.getElementById("chapter-one").classList.toggle("hide");
    document.getElementById("start-frame").classList.toggle("hide");
});

/*-----------------------THE-GAME----------------------------*/

// Create JS variables for HTML-elements
var shownWord = document.getElementById("shown-word");
var rightWord = document.getElementById("right-word");
var wrongGuesses = document.getElementById("wrong-guesses");
var figureParts = document.querySelectorAll(".figure-part");
var winPopup = document.getElementById("win-popup");
var playAgainBtn = document.getElementById("play-again-btn");
var losePopup = document.getElementById("lose-popup");
var playAgainBtn2 = document.getElementById("play-again-btn2");
var theWordWas = document.getElementById("the-word-was");
var pointCounter = document.getElementById("point-counter");
var pointContainer = document.getElementById("point-container");
var pointResult = document.getElementById("point-result");

// Create variables for "future Use"
var points = 0;
var errorCounter = 0;
var word = "";

// An array with words
const words = ['coffee', 'programming', 'interface', 'whiskey', 'love', 'glowworm', 'jigsaw', 'bikini', 'buzzard', 'thumbscrew', 'transplant', 'python', 'unknown', 'index', 'xylophone', 'zombie', 'cassandra', 'sanna', 'wave', 'rhythm', 'subway', 'unworthy', 'witchcraft'];

// Prepare word and lists for the game
var setTheWord = () => {
    // Choose a random word from the array of words
 word = words[Math.floor(Math.random() * words.length)];
 console.log(word);
// Create a list of lines with as many lines as there are letters in the chosen word
for (var i=0; i<word.length; i++) {
    shownWord.innerHTML += "<li>_</li>";
    rightWord.innerHTML += "<li>" + word[i] + "</li>";
};
};

// Invoke function
setTheWord();

// Insert points in container
pointContainer.innerHTML = points;

// Make a guess by pressing letter on keyboard
window.addEventListener("keydown", e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

    // If the letter has already been guessed, console the log
    if (shownWord.innerHTML.includes("<li>" + letter + "</li>") || wrongGuesses.innerHTML.includes("<li>" + letter + "</li>")) {
        console.log("Already guessed!")

    // If the letter is in the word - show it in the right position
    } else if (word.includes(letter)) {
        for (var i=0; i<word.length; i++) {
            if (letter === word[i]) {
            shownWord.children[i].innerHTML = letter;
            }
        } 
    
        // If the word is completed show "win-PopUp" and add points
        if (shownWord.innerHTML === rightWord.innerHTML) {
            winPopup.classList.toggle('hide');
            points += (5 - errorCounter);
            pointContainer.innerHTML = points;      
         }

    // If the letter is not in the word, add it to the wrong-guesses-list
    } else {
        wrongGuesses.innerHTML += "<li>" + letter + "</li>";
        
        // Show each part of the figure for each error
        figureParts.forEach((element, index) => {
            if (index === errorCounter) {
                element.classList.toggle("hide");
            };
        });
 
        // Add one more error to the counter
        errorCounter += 1;
        
        // When error counter reaches five show the "lose-PopUp"
        if (errorCounter === 5 ){
            losePopup.classList.toggle("hide");
            theWordWas.innerHTML = word;
            pointResult.innerHTML = `You got ${points} points.`;
        };
    }
    }
});

// Reset game - defining a function to invoke when you win or lose
var resetGame = () => {
    shownWord.innerHTML = " ";
    rightWord.innerHTML = " ";
    wrongGuesses.innerHTML = " ";
    errorCounter = 0;
    // Hide figure parts that are showing
    figureParts.forEach( element => {
        if (element.classList.contains("hide")=== false){
        element.classList.toggle("hide")
    };
    });

    // Randomize new word
    setTheWord();
};

// Play again button - If you win
playAgainBtn.addEventListener('click', () => {
    resetGame();
    winPopup.classList.toggle("hide");   
});

// Play again button -  If you lose
playAgainBtn2.addEventListener('click', () =>{
    resetGame();
    losePopup.classList.toggle("hide");
    points = 0;
    pointContainer.innerHTML = points;
});