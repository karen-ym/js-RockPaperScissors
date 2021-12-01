"use strict";

// qSA returns a NodeList
const playerChoice = document.querySelectorAll(".c");

let spanResult = document.querySelector(".result-text-span");
const spanBox = document.querySelector(".result-text");

let computerPointsDom = document.querySelector(".span-c");
let humanPointsDom = document.querySelector(".span-h");

let computerPoints = 0;
let humanPoints = 0;

let humanChoice;

// using forEach I need to add the function + parameter!
playerChoice.forEach(function (item) {
	// add event FOR EACH ITEM!!
	item.addEventListener("click", function (e) {
		if (humanPoints === 0 && computerPoints === 0) {
			document.body.style.backgroundColor = "#C44343";
		}

		if (item.classList.contains("0")) {
			humanChoice = 0; //rock
		} else if (item.classList.contains("1")) {
			humanChoice = 1; // paper
		} else {
			humanChoice = 2; //scissors
		}

		// random computer choice
		let computerChoice = Math.floor(Math.random() * 3);

		switch (humanChoice) {
			case 0:
				if (computerChoice === 1) {
					// rock-paper
					computerPoints++;
					spanResult.innerText = "rock vs. paper";
					spanBox.style.backgroundColor = "#ff868a";
				} else if (computerChoice === 2) {
					// rock-scissors
					humanPoints++;
					spanResult.innerText = "rock vs. scissors";
					spanBox.style.backgroundColor = "#13d9b4";
				} else if (computerChoice === 0) {
					// rock-rock
					humanPoints = humanPoints;
					computerPoints = computerPoints;
					spanResult.innerText = "EMPATE";
					spanBox.style.backgroundColor = "#b29e89";
				}
				break;
			case 1:
				if (computerChoice === 0) {
					// paper-rock
					humanPoints++;
					spanResult.innerText = "paper vs. rock";
					spanBox.style.backgroundColor = "#13d9b4";
				} else if (computerChoice === 2) {
					// paper-scissors
					computerPoints++;
					spanResult.innerText = "paper vs. scissors";
					spanBox.style.backgroundColor = "#ff868a";
				} else if (computerChoice === 1) {
					// paper-paper
					humanPoints = humanPoints;
					computerPoints = computerPoints;
					spanResult.innerText = "EMPATE";
					spanBox.style.backgroundColor = "#b29e89";
				}
				break;
			case 2:
				if (computerChoice === 0) {
					// scissors-rock
					computerPoints++;
					spanResult.innerText = "scissors vs. rock";
					spanBox.style.backgroundColor = "#ff868a";
				} else if (computerChoice === 1) {
					// scissors-paper
					humanPoints++;
					spanResult.innerText = "scissors vs. paper";
					spanBox.style.backgroundColor = "#13d9b4";
				} else if (computerChoice === 2) {
					// scissors-scissors
					humanPoints = humanPoints;
					computerPoints = computerPoints;
					spanResult.innerText = "EMPATE";
					spanBox.style.backgroundColor = "#b29e89";
				}
		}

		humanPointsDom.innerHTML = humanPoints;
		computerPointsDom.innerHTML = computerPoints;

		if (humanPoints === 3) {
			humanPoints = 0;
			computerPoints = 0;
			spanResult.innerText = "Congrats! You win.";
			spanBox.style.backgroundColor = "#13d9b4";
			document.body.style.backgroundColor = "#13d9b4";
		} else if (computerPoints === 3) {
			humanPoints = 0;
			computerPoints = 0;
			spanResult.innerText = "Sorry, Computer wins!";
			spanBox.style.backgroundColor = "#ff868a";
			document.body.style.backgroundColor = "#ff868a";
		}

		console.log("C", humanChoice, computerChoice);
		console.log("P", humanPoints, computerPoints);
	});
});
