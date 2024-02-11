let result = ['Player Win', 'Player Lost', 'Tie']; // an array of result per round
let opt = ['rock', 'paper', 'scissor']; // an array of options

let playerChoice = document.querySelector('.playerChoice');
let computerChoice = document.querySelector('.computerChoice');
const cScore = document.querySelector('#computerScore');
const pScore = document.querySelector('#playerScore');
const userInput = document.querySelectorAll('.input');
let winner = document.querySelector('.result');
let tie = document.querySelector('.tie')
let playerSelection, msg;
let computerScore = 0;
let playerScore = 0;

//add click event to each buttons of the user input and calls the gameProgress function
const rock = document.querySelector('#btnrock'); 
rock.addEventListener("click",() =>{
        playerSelection = "rock";
        gameProgress();
        playerChoice.textContent = "You choose ROCK"
}); 

const paper = document.querySelector('#btnpaper'); 
paper.addEventListener("click",() =>{
        playerSelection = "paper";
        gameProgress();
        playerChoice.textContent = "You choose Paper"
}); 
  
const scissor = document.querySelector('#btnscissor'); 
scissor.addEventListener("click",() =>{
    playerSelection = "scissor";
    gameProgress();
    playerChoice.textContent = "You choose Scissor"
}); 

/** 
 * A function that randomly return computer choice 
 * it assign the value to a value in the array choice
*/
function getComputerChoice(){

    let choice;
    const randomNum = Math.floor(Math.random()*opt.length);
    
    if (randomNum === 0){choice = opt[0]}
    else if (randomNum=== 1){choice = opt[1]}
    else{choice = opt[2]}
    
    computerChoice.textContent = `The Computer choose ${choice}`
    return choice; 
}

/***
 * This function plays a single round of the game 
 * it takes two parameter
 * return a string that declare the winner
 */

 function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection){msg = result[2]} 
    else if(playerSelection == opt[2] && computerSelection == opt[0]){msg = result[1]} 
    else if(playerSelection == opt[0] && computerSelection == opt[2]){msg = result[0]} 
    else if(playerSelection == opt[0] && computerSelection == opt[1]){msg = result[1]} 
    else if(playerSelection == opt[1] && computerSelection == opt[0]){msg = result[0]} 
    else if(playerSelection == opt[1] && computerSelection == opt[2]){msg = result[1]} 
    else if(playerSelection == opt[2] && computerSelection == opt[1]){msg = result[0]} 
    return msg;
}

//This function compares the msg with the result & it increment the score of player
function scores(){
    
    if (msg === result[0]){
        playerScore ++; 
        pScore.textContent = playerScore
    }
    else if (msg === result[1]){
        computerScore ++;
        cScore.textContent = computerScore
    }
    console.log(playerScore, computerScore)

    function getWinner(){
        if(playerScore == 5){
            winner.textContent = "Bravo player you won";
            userInput.forEach(input => {input.disabled = true})
        }
        else if (computerScore == 5){
            winner.textContent = "Oops! Computer wins";
            userInput.forEach(input => {input.disabled = true})
        }
        else{
            winner.textContent = "Keep going";
        }
        return winner;
    }
    return getWinner()
}

//This function stores the result for each round and calls the scores function
function gameProgress(){

    const computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    
    scores()

    if (msg == result[2]) {
        tie.textContent = "We have a tie";
      } else {
        tie.textContent = "";
      }
}

//Use this when running the game in console
/* function game(){
    let roundResult;

  

    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper, Scissor");
        playerSelection = playerSelection.toLowerCase(); 

        if (playerSelection != opt[0]){
            if (playerSelection != opt[1]){
                if (playerSelection != opt[2]){
                    break;
                }
                else{
                    gameProgress();
                }
            } 
            else{
                gameProgress();
            }
        }
        else{
            gameProgress();  
        }
    }
}
game();  */