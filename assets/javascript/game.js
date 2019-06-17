/* Psuedocoding for game
When start button is pressed, generate random number (between 19 and 120) into the random number div.
Also set wins, losses and total score to 0. DONE
Assign an individual random number (between 1 and 12) to each crystal and hide them.
Show number when crystal is clicked and add it to player's total score.
When total score is equal to the random number, update wins by 1 and generate another number.
When total score is more than the random number, update wins by 1 and generate another number.*/

var maximum = 120;
var minimum = 19;
var randomNumber;
function getRandomNumber () {
    return (Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum);
} 
console.log(randomNumber);
var userScore = 0;
var wins = 0;
var losses = 0;
//create function for creating a randomcrystal number like the one above
var redCrystal = (Math.floor(Math.random() * 12 + 1));
var greenCrystal = (Math.floor(Math.random() * 12 + 1));
var purpleCrystal = (Math.floor(Math.random() * 12 + 1));
var yellowCrystal = (Math.floor(Math.random() * 12 + 1));

function setWins() {
    $("#wins").append(wins);
}

function setLosses() {
    $("#losses").append(losses);
}

function setRandomNumber() {
    randomNumber = getRandomNumber();
    $("#randomNumber").append(randomNumber);
}

function setTotalScore() {
    userScore = 0;
    $("#totalScore").append(userScore);
}

function setCrystalNumbers() { //setting random numbers to the gems
    $("#redText").append(redCrystal);
    $("#greenText").append(greenCrystal);
    $("#purpleText").append(purpleCrystal);
    $("#yellowText").append(yellowCrystal);
    // if ($("redText") === $("greenText") || $("redText") === $("purpleText") || $("redText") === $("yellowText")) {        
    //     redCrystal = (Math.floor(Math.random() * 12 - 1));
    // } else if ($("greenText") === $("purpleText") || $("greenText") === $("yellowText")) {
    //     greenCrystal = (Math.floor(Math.random() * 12 - 1));
    // } else if ($("purpleText") === $("yellowText")) {
    //     purpleCrystal = (Math.floor(Math.random() * 12 - 1));
    // } 
    // Trying to prevent duplicate random numbers. Will leave for now.    
}

function hideNumbers() { // hide the gem numbers
    $("#redText").css("display", "none");
    $("#greenText").css("display", "none");
    $("#purpleText").css("display", "none");
    $("#yellowText").css("display", "none");
}

function showRed() { //show the numbers on the gems
    $("#redText").css("display", "block");
}

function showGreen() {
    $("#greenText").css("display", "block");
}

function showPurple() {
    $("#purpleText").css("display", "block");
}

function showYellow() {
    $("#yellowText").css("display", "block");
}

function reset() { //game reset function
    $("#totalScore").empty();
    $("#randomNumber").empty();
    $("#redText").empty();
}

$(".btn").one("click", function startGame() { // start game function
    setWins();
    setLosses();
    setRandomNumber();
    setTotalScore();
    setCrystalNumbers();
    hideNumbers();
});


$("#redCrystal").click(function () { //this is the function whenever the red crystal is clicked
    showRed();
    userScore = userScore + redCrystal;
    console.log("Current score: " + userScore);
    $('#totalScore').text(userScore);
        if (userScore === randomNumber) {
            wins++;
            reset();
            setRandomNumber();
            setTotalScore();
            setCrystalNumbers();
            hideNumbers();
        } else if (userScore > randomNumber) {
            losses++;
            alert("Sorry, you lost this one! Try again");
            reset();
            setRandomNumber();
            setTotalScore();
            setCrystalNumbers();
            hideNumbers();
        }
});
