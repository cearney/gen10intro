/*
	Name: Caleb Earney
	Date Created: 10/1/2019
	Most recent revision: Created basic web layout
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

	// If player's entered starting bet is less than or equal to 0, display an error message
	if(gameMoney <= 0) {
		alert("Your starting bet must be greater than $0.\nPlease enter a valid bet amount.");
		return false; // Don't let player continue until money amount is greater than 0
	}
	// While there is money in the game, roll the dice repeatedly until money is gone
	else {
		while(gameMoney > 0) {
			dieOne = rollDice(6); // First Roll of 6-sided die
			dieTwo = rollDice(6); // Second Roll of 6-sided die
			diceTotal = dieOne + dieTwo; // Sum of both rolls
			totalRolls++; // Each time dice are rolled, add counter to total rolls
			
			// If the dice total is NOT 7, player loses $1
			if(diceTotal != 7) {
				gameMoney--;
				console.log("Lost Roll"); // For testing purposes to ensure game is running
			}
			// If the dice total is 7, player wins $4
			else {
				gameMoney += 4;
				// Checks if current amount of money is greater than max to keep track
				// of max amount of money player has had in game
				if(gameMoney > maxAmountMoney){
					maxAmountMoney += (gameMoney-maxAmountMoney);
					rollCountMax = totalRolls;
				}
				console.log("Won Roll"); // For testing purposes to ensure game is running
			}
		}
	}
	
	// Displays formatted header and hidden table from HTML
	document.getElementById("divider").style.display = "block";
	document.getElementById("results-header").style.display = "block";
	document.getElementById("results").style.display = "table";
	// Displays results in the HTML in the form of table elements
	document.getElementById("start-bet").innerText = startBet;
	document.getElementById("total-rolls").innerText = totalRolls;
	document.getElementById("max-amount").innerText = maxAmountMoney;
	document.getElementById("roll-count-max").innerText = rollCountMax;
	// Changes button from "Play" to "Play Again" to indicate player has opportunity to play again
	document.getElementById("submit-btn").innerText = "Play Again";
	
	return false; // Allows game to continue to be played
}

/*
	Roll dice functions created from the Rolling Dice exercise in JavaScript module
	Returns random number from 1 to any number entered in parameter
*/
function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}
