var buttonColours = ["red", "blue", "green", "yellow"];

//function produces number from 0 to 3 and outputs random colour
function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var colours = ["red", "blue", "green", "yellow"];
	return colours[randomNumber];
}

//random colour stored in randomChosenColour
var randomChosenColour = nextSequence();

//random colour pushed to end up buttonColours array
var gamePattern = buttonColours.push(randomChosenColour);
