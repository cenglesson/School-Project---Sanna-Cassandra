/*-----------------------START-FRAME-------------------------*/

document.getElementById('start-button').addEventListener('click', function() {
    //Toggle hide class
    document.getElementById('chapter-one').classList.toggle('hide');
    document.getElementById('start-frame').classList.toggle('hide');
});

/*-----------------------THE-GAME----------------------------*/

const words = ['coffee', 'programming', 'interface', 'whiskey', 'love', 'glowworm', 'jigsaw', 'bikini', 'buzzard', 'thumbscrew', 'transplant', 'python', 'unknown', 'index', 'xylophone', 'zombie', 'cassandra', 'sanna', 'wave', 'rhythm', 'subway', 'unworthy', 'witchcraft'];

// Choose a random word from the array of words
var word = words[Math.floor(Math.random() * words.length)];

// Create a list of lines with as many lines as there are letters in the chosen word
var shownWord = document.getElementById("shown-word");
for (var i=0; i<word.length; i++) {
    shownWord.innerHTML += '<li>_</li>';
};

// Make a guess by pressing letter on keyboard
window.addEventListener("keydown", e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

    // If the letter is in the word - show it in the right position
    if (word.includes(letter)) {
        for (var i=0; i<word.length; i++) {
            if (letter === word[i]) {
            shownWord.children[i].innerHTML = letter;
            }
        }
    }
    }
})