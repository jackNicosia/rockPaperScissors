
/* The computer will randomly select from the array of  [rock, paper, scissors].
   The player will select rock, paper, or scissors. 
   The two selections will be compared. 
   The winner will be announced.



   on the final winning or losing screen i want the choices to be taken away and
*/


let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
const choices = ["rock","paper","scissors"];
const buttons = document.querySelectorAll('.btn');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const message = document.querySelector('#message');

buttons.forEach((button)=>{button.addEventListener('click',()=>{
  playerSelection = button.id;
  game();
  getComputerChoice()
  })
})


function getComputerChoice(){
  const random = Math.floor(Math.random() * choices.length);
  return(choices[random]);
}


function playRound() {
  let result;
  computerSelection = getComputerChoice();
  if ((playerSelection == "rock" && computerSelection == "rock") || 
      (playerSelection == "paper" && computerSelection == "paper") ||
      (playerSelection == "scissors" && computerSelection == "scissors")) {     
    result = "Its a tie!"; 
    message.style.color="black";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")) {
    result = "You Won!";
    lvlUp.load();
    lvlUp.play();
    playerScore++;
    playerPoints.textContent = playerScore;
    message.style.color ="#0EB21F";
  } else {
    result = "You lost!";
    lvlDown.load();
    lvlDown.play();
    computerScore++;
    computerPoints.textContent = computerScore;
    message.style.color ="#D71C07"
  }
  console.log(result);
  message.textContent = result;
}
    

var pictures = document.querySelector(".buttons");


function game(){
  let finalScore;
  playRound();

  if (computerScore == 5){
    pictures.style.display = "none";
     finalScore = "Computer wins the final duel!"
    loser.play();
    losePic.style.display = "initial"
    message.textContent = finalScore;
    buttons.forEach(button => {
      button.disabled = true;
    });
  } else if (playerScore == 5){
    pictures.style.display = "none";
    finalScore = "Game over, you win!"
    winner.play();
    winPic.style.display = "initial";
    message.textContent= finalScore;
    buttons.forEach(button => {
      button.disabled = true;
    });
  }
  console.log(finalScore);
}

reset.addEventListener('click', () => {
  pictures.style.display = "initial";
  winPic.style.display = "none";
  losePic.style.display = "none";
  message.textContent= null;
  computerScore = 0;
  playerScore = 0;
  winner.pause();
  winner.currentTime = 0;
  loser.pause();
  loser.currentTime = 0;
  computerPoints.textContent = computerScore;
  playerPoints.textContent = playerScore;
  buttons.forEach(button => {
    button.disabled = false;
  });
});

var clickAudio = document.getElementById("pop");
var hoverAudio = document.getElementById("hover")
var img = document.getElementsByClassName("buttons");
var loser = document.getElementById("loser");
var winner = document.getElementById("winner");
var lvlUp = document.getElementById("lvlUp");
var lvlDown = document.getElementById("lvlDown");

function play0() {
  clickAudio.load();
  clickAudio.play();
}

function stop() {
  clickAudio.pause();
}

lvlUp.duration = 0.5;
lvlDown.volume = 1;
lvlUp.volume = 0.5;
clickAudio.volume = 0.5;
hoverAudio.volume = 0.2;

function play1(){
  hoverAudio.load();
  hoverAudio.play(); 

}

for (const div of buttons){

div.addEventListener("click", play0)
div.addEventListener("mouseover", play1)

}

winPic.style.display = "none";
losePic.style.display = "none";
















/*

  let computerScore = 0;
  let playerScore = 0;
  let playerSelection;
  let computerSelection;
  const choices = ["rock","paper","scissors"];
  const buttons = document.querySelectorAll('.btn');
  const playerPoints = document.querySelector('#playerScore');
  const computerPoints = document.querySelector('#computerScore');
  const message = document.querySelector('#message');

  buttons.forEach((button)=>{button.addEventListener('click',()=>{
    playerSelection = button.id;
    game();
    getComputerChoice()
    })
})


  function getComputerChoice(){
    const random = Math.floor(Math.random() * choices.length);
    return(choices[random]);
  }


  function playRound() {
    let result;
    computerSelection = getComputerChoice();
     if ((playerSelection == "rock" && computerSelection == "rock") || 
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")) {     
     result = "Its a tie!"; 
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
              (playerSelection == "scissors" && computerSelection == "paper") ||
              (playerSelection == "paper" && computerSelection == "rock")) {
      result = "You Win!"; 
      playerScore++;
      playerPoints.textContent = playerScore;
      } else {
      result = "You lose!";
      computerScore++;
      computerPoints.textContent = computerScore;
    }
    console.log(result);
    message.textContent = result;
    }
    

    

    function game(){
      let finalScore;
      playRound();
    
    if (computerScore == 5){
       finalScore = "Computer wins the final duel!"
       computerScore = 0;
       playerScore = 0;
       computerPoints.textContent = computerScore;
       playerPoints.textContent = playerScore;
       message.textContent = finalScore;
      } else if (playerScore == 5){
        finalScore = "Game over, you win!"
        computerScore = 0;
        playerScore = 0;
        computerPoints.textContent = computerScore;
        playerPoints.textContent = playerScore;
        message.textContent = finalScore;
      }
      console.log(finalScore);
    }
    
    */


/*
  function endGame(){
  if (finalScore = "Game over, you win!")
  computerScore == 0;
  }
  */

  /* Use the for loop to output even numbers from 2 to 10.
    for (let i = 2; i < 11; i += 2){
    alert(i);
  }
 
 Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

  let i =0;
  while (i < 3) {
  alert(`number ${i}!` );
  i++;
  }



  Write a loop which prompts for a number greater than 100. 
  If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a 
number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s 
no need to implement a special handling for a non-numeric input in this task.
  

let num; 
 
do { 
  num = prompt("Enter a number greater than 100", 0);
} while (num <=100 && num);



num = prompt("Enter a number");
let n = 2;
num % n === 0 ? : n++




for (let n=2; num % n <= 0; n++){
  alert(num % n)
}
*/


