/*
	Name: Caleb Earney
	Date Created: 10/1/2019
	Most recent revision: Created basic play() function layout
*/

/*
	Function to play Lucky Sevens when the play button is clicked
*/
function play() {
	// Player's initial bet based entered number in form
	var startBet = Number(document.forms["lucky-sevens"]["bet-num"].value);
	// Amount of money in game, set to player's initial bet
	var gameMoney = startBet;
	var dieOne; // Value of First die rolled
	var dieTwo; // Value of Second die rolled
	var diceTotal; // Value of both die rolls added together
	// Keeps track of how many rolls were taken before the money ran out
	var totalRolls = 0;
	// Keeps track of the maximum amount of money held by the player
	var maxAmountMoney = 0;
	// Keeps track of how many rolls were taken at the point when the user held the most money
	var rollCountMax = 0;

	
}

/*
	Roll dice functions created from the Rolling Dice exercise in JavaScript module
	Returns random number from 1 to any number entered in parameter
*/
function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}