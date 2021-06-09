let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

//function produces number from 0 to 3
function nextSequence() {
	let randomNumber = Math.floor(Math.random() * 4);
	return randomNumber;
}

//random colour is produced
let randomChosenColour = buttonColours[nextSequence()];

//push random colour to gamePattern array
gamePattern.push(randomChosenColour);

//select button with same id as randomChosenColour, add flash animation, add sound
function buttonAnimation() {
	let buttonSelected = document.getElementById(randomChosenColour);
	buttonSelected.classList.add("black-button");
	setTimeout(function () {
		buttonSelected.classList.remove("black-button");
	}, 100);
	let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
	audio.play();
}
