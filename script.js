"use strict";

// qSA returns a NodeList
const playerChoice = document.querySelectorAll(".c");

let spanResult = document.querySelector(".result-text-span");
const spanBox = document.querySelector(".result-text")

let computerPointsDom = document.querySelector(".span-c");
let humanPointsDom = document.querySelector(".span-h");

let computerPoints = 0;
let humanPoints = 0;

let humanChoice;

// using forEach I need to add the function + parameter!
 playerChoice.forEach(function (item) {
  // add event FOR EACH ITEM!!
   item.addEventListener("click", function (e) {

    if(humanPoints === 0 && computerPoints === 0){
      document.body.style.backgroundColor = "#C44343";
    }

    if(item.classList.contains("0")){
      humanChoice = 0; //piedra
    } else if (item.classList.contains("1")){
      humanChoice = 1; // papel
    } else {
      humanChoice = 2; //tijera
    };

    // random computer choice
    let computerChoice = Math.floor(Math.random() * (3));

    switch(humanChoice){
      case 0:
        if(computerChoice === 1){
          // piedra-papel
          computerPoints++;
          spanResult.innerText = "piedra vs. PAPEL";
          spanBox.style.backgroundColor = "#ff868a";
        } else if (computerChoice === 2){
          // piedra-tijera
          humanPoints++;
          spanResult.innerText = "piedra vs. TIJERA";
          spanBox.style.backgroundColor = "#13d9b4";
        } else if (computerChoice === 0){
          // piedra-piedra
          humanPoints = humanPoints;
          computerPoints = computerPoints;
          spanResult.innerText = "EMPATE";
          spanBox.style.backgroundColor = "#b29e89";
        }
      break;
      case 1:
        if(computerChoice === 0){
          // papel-piedra
          humanPoints++;
          spanResult.innerText = "papel vs. PIEDRA";
          spanBox.style.backgroundColor = "#13d9b4";
        } else if (computerChoice === 2){
          // papel-tijera
          computerPoints++;
          spanResult.innerText = "papel vs. TIJERA";
          spanBox.style.backgroundColor = "#ff868a";
        } else if (computerChoice === 1){
          // papel-papel
          humanPoints = humanPoints;
          computerPoints = computerPoints;
          spanResult.innerText = "EMPATE";
          spanBox.style.backgroundColor = "#b29e89";
        }
      break;
      case 2:
        if(computerChoice === 0){
          // tijera-piedra
          computerPoints++;
          spanResult.innerText = "tijera vs. PIEDRA";
          spanBox.style.backgroundColor = "#ff868a";
        } else if (computerChoice === 1){
          // tijera-papel
          humanPoints++;
          spanResult.innerText = "tijera vs. PAPEL";
          spanBox.style.backgroundColor = "#13d9b4";
        } else if (computerChoice === 2){
          // tijera-tijera
          humanPoints = humanPoints;
          computerPoints = computerPoints;
          spanResult.innerText = "EMPATE";
          spanBox.style.backgroundColor = "#b29e89";
        }
    };

    humanPointsDom.innerHTML = humanPoints;
    computerPointsDom.innerHTML = computerPoints;

    if (humanPoints === 3){
      humanPoints = 0;
      computerPoints = 0;
      spanResult.innerText = "Ha ganado! Felicidades, no es débil..";
      spanBox.style.backgroundColor = "#13d9b4";
      document.body.style.backgroundColor = "#13d9b4";
    } else if (computerPoints === 3){
      humanPoints = 0;
      computerPoints = 0;
      spanResult.innerText = "Felicidades inútil, LA COMPUTADORA HA GANADO!";
      spanBox.style.backgroundColor = "#ff868a";
      document.body.style.backgroundColor = "#ff868a";
    }

    console.log("C", humanChoice, computerChoice);
    console.log("P", humanPoints, computerPoints);
  });
});