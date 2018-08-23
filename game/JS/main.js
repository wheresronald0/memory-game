/*
console.log("up and running!");
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
console.log('User Flipped ' + cardOne);
console.log('User Flipped ' + cardThree);
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[3];
var cardThree = cards[2];
var cardFour = cards[1];

cardInPlay.push(cardOne);
cardInPlay.push(cardTwo);
/*
cardInPlay.push(cardThree);
cardInPlay.push(cardFour);
*/

if (cardInPlay.length === 2) {
	cardInPlay[0] === cardInPlay[1];
	alert("You found a match!");	
} else {
	alert("Sorry, try again!");
}


//console.log('User Flipped ' + cardTwo);