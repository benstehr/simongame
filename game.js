let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

document.addEventListener("keydown", function () {
	if (!started) {
		setTimeout(function () {
			nextSequence();
		}, 200);
		started = true;
	}
});

let buttons = document.getElementsByClassName("btn");

let buttonCount = buttons.length;

for (i = 0; i <= buttonCount; i++) {
	buttons[i].addEventListener("click", function () {
		let userChosenColour = this.id;
		userClickedPattern.push(userChosenColour);
		playSound(userChosenColour);
		animatePress(userChosenColour);
		checkAnswer(userClickedPattern.length - 1);
	});
}

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		playSound("wrong");
		document.querySelector("body").classList.add("game-over");
		document.getElementById("level-title").innerHTML =
			"Game Over, Press Any Key to Restart";
		setTimeout(function () {
			document.querySelector("body").classList.remove("game-over");
		}, 100);
		startOver();
	}
}

function nextSequence() {
	userClickedPattern = [];
	level++;
	document.getElementById("level-title").innerHTML = "Level " + level;
	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	document.getElementById(randomChosenColour).classList.add("black-button");
	setTimeout(function () {
		document
			.getElementById(randomChosenColour)
			.classList.remove("black-button");
	}, 100);
	playSound(randomChosenColour);
}

function playSound(name) {
	let audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColour) {
	document.getElementById(currentColour).classList.add("pressed");
	setTimeout(function () {
		document.getElementById(currentColour).classList.remove("pressed");
	}, 100);
}

function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}
