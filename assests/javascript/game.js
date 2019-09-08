var computerOptions = ["a" , "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuesses = []; 
var wins = 0;
var losses = 0;
var guesses_left = 9;
var letters_used = [];
var eachofLetters = null;


var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

function num_guessLeft (){
    document.querySelector("#guesses_left").innerHTML = "guesses left: " + guesses_left;
    console.log("guesses left");
}
function char_letterGuess(){

    document.querySelector("#letters_used").innerHTML = "letters so far: " + letters_used.join(" ");
    console.log("lettters used");
}
num_guessLeft();
function compguess(){
    document.querySelector("#computerGuess").innerHTML = "Computer Choice: "+ computerGuesses.join("");
   }

var reset = function(){
    guesses_left = 9;
    letters_used = [];
    var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
    document.onkeyup = function(event) {
        guesses_left--;
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        letters_used.push(userGuess);
        num_guessLeft();
        char_letterGuess();

        if (userGuess===computerChoice){
            wins++;
            document.querySelector("#wins").innerHTML = "wins: " + wins;

        }
        else if (guesses_left===0){
            losses++;
            document.querySelector("#losses").innerHTML = "losses: " + losses;
            reset();
        }
    
        
    };

        
