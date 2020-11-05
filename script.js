/*-----------------------START-FRAME-------------------------*/

document.getElementById('start-button').addEventListener('click', function() {
    //Toggle hide class
    document.getElementById('chapter-one').classList.toggle('hide');
    document.getElementById('start-frame').classList.toggle('hide');
});

/*-----------------------THE-GAME----------------------------*/

const words = ['coffee', 'programming', 'interface', 'whiskey', 'love', 'glowworm', 'jigsaw', 'bikini', 'buzzard', 'thumbscrew', 'transplant', 'python', 'unknown', 'index', 'xylophone', 'zombie', 'cassandra', 'sanna', 'wave', 'rhythm', 'subway', 'unworthy', 'witchcraft'];
var word = [Math.floor(Math.random() * words.length)];

var shownWord = document.getElementById("shown-word");

for (var i=0; i<word.length; i++) {
    shownWord.innerHTML += "<li>_</li>";
};