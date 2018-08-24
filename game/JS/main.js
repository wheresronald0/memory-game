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
var cardInPlay = [];//is only 2 cards at a time 

/*
var checkForMath = funtion () {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
*/


var flipCard = function (cardId) { //to store all steps that should happen when the user flips a card.//
	cardInPlay.push(cards[cardId]);

		if (cardInPlay.length === 2) {

			if (cardInPlay[0] === cardInPlay[1]) {
			alert("You found a match!");	
			} else {
			alert("Sorry, try again!");
		}
	}
	console.log("User flipped " + cards[cardId]);
}


flipCard(0);
flipCard(2);

/*
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/




