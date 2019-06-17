/* Psuedocoding for game
When start button is pressed, generate random number (between 19 and 120) into the random number div.
Also set wins, losses and total score to 0. DONE
Assign an individual random number (between 1 and 12) to each crystal and hide them.
Show number when crystal is clicked and add it to player's total score.
When total score is equal to the random number, update wins by 1 and generate another number.
When total score is more than the random number, update wins by 1 and generate another number.*/

var maximum = 120;
var minimum = 19;
var randomNumber = (Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum);
console.log(randomNumber);
var totalScore = 0;
var wins = 0;
var losses = 0;

function setWins() {
    $("#wins").append(wins);
}

function setLosses() {
    $("#losses").append(losses);
}

function setRandomNumber() {
    $("#randomNumber").append(randomNumber);
}

function setTotalScore() {
    $("#totalScore").append(totalScore);
}

$(".btn").one("click", function startGame() {
    setWins();
    setLosses();
    setRandomNumber();
    setTotalScore();
});

