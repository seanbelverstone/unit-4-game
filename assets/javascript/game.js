/* Psuedocoding for game
When start button is pressed, generate random number (between 19 and 120) into the random number div.
Assign an individual random number (between 1 and 12) to each crystal and hide them.
Show number when crystal is clicked and add it to player's total score.
When total score is equal to the random number, update wins by 1 and generate another number.
When total score is more than the random number, update wins by 1 and generate another number.*/

var maximum = 120;
var minimum = 19;
var randomNumber = (Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum);
console.log(randomNumber);
var totalScore;
var wins;
var losses;



