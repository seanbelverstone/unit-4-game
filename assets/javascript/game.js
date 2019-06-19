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
var userScore = 0;
var wins = 0;
var losses = 0;
function getCrystalNumber() {
    return (Math.floor(Math.random() * 12 + 1));
}
var redCrystal;
var greenCrystal;
var purpleCrystal;
var yellowCrystal;
var crystalArray = []; // an empty array that will store the random crystal numbers

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
    redCrystal = getCrystalNumber();
    greenCrystal = getCrystalNumber();
    purpleCrystal = getCrystalNumber();
    yellowCrystal = getCrystalNumber();
    $("#redText").append(redCrystal);
    $("#greenText").append(greenCrystal);
    $("#purpleText").append(purpleCrystal);
    $("#yellowText").append(yellowCrystal);
    crystalArray.push(redCrystal, greenCrystal, purpleCrystal, yellowCrystal);
    console.log(crystalArray);

        // for (var iterator = 0; iterator < crystalArray.length; iterator++) {
        //     if (crystalArray.indexOf(iterator)) {
        //         console.log(true);
        //         crystalArray = [];
        //         $("#redText, #greenText, #purpleText, #yellowText").empty();
        //         setCrystalNumbers();
        //         } else {
        //         console.log(false);
        //     } trying to create a for loop that checks for duplicates but it's not working.
        // }
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
    $("#redText, #greenText, #purpleText, #yellowText").empty();
    crystalArray = [];
    setRandomNumber();
    setTotalScore();
    setCrystalNumbers();
    hideNumbers();
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
            $("#wins").text("Wins: " + wins);
            alert("Well done!");
            reset();
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("Sorry, you lost this one! Try again");
            reset();
        }
});

$("#greenCrystal").click(function () { //this is the function whenever the green crystal is clicked
    showGreen();
    userScore = userScore + greenCrystal;
    console.log("Current score: " + userScore);
    $('#totalScore').text(userScore);
        if (userScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            alert("Well done!");
            reset();
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("Sorry, you lost this one! Try again");
            reset();
        }
});

$("#purpleCrystal").click(function () { //this is the function whenever the purple crystal is clicked
    showPurple();
    userScore = userScore + purpleCrystal;
    console.log("Current score: " + userScore);
    $('#totalScore').text(userScore);
        if (userScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            alert("Well done!");
            reset();
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("Sorry, you lost this one! Try again");
            reset();
        }
});

$("#yellowCrystal").click(function () { //this is the function whenever the yellow crystal is clicked
    showYellow();
    userScore = userScore + yellowCrystal;
    console.log("Current score: " + userScore);
    $('#totalScore').text(userScore);
        if (userScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            alert("Well done!");
            reset();
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("Sorry, you lost this one! Try again");
            reset();
        }
});