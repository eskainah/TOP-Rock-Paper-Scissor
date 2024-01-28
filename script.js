let opt = ['rock', 'paper', 'scissor']; // an array of options
let result = ['Player Win', 'Player Lost', 'Tie']; // an array of result per round
let playerSelection, msg;

/**
 * A function that randomly return computer choice 
 * it assign the value to a value in the array choice
*/
function getComputerChoice(){
   
    let computerChoice;
    const randomNum = Math.floor(Math.random()*opt.length);
    
    if (randomNum === 0){
        computerChoice = opt[0];
        console.log("the random num is ", computerChoice )
    }
    else if (randomNum=== 1){
        computerChoice = opt[1];
        console.log("the random num is ", computerChoice )
    }
    else{
        computerChoice = opt[2];
        console.log("The random num is ", computerChoice);
    }
    return computerChoice; 
}

/***
 * This function plays a single round of the game 
 * it takes two parameter
 * return a string that declare the winner
 * it compares the string input by user length
 */

 function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        msg = result[2];
    } 
    
    else if(playerSelection == opt[2] && computerSelection == opt[0]){
        msg = result[1]; 
    } 
    else if(playerSelection == opt[0] && computerSelection == opt[2]){
        msg = result[0];
    } 

    else if(playerSelection == opt[0] && computerSelection == opt[1]){
        msg = result[1];
    } 
    else if(playerSelection == opt[1] && computerSelection == opt[0]){
        msg = result[0];
    } 

    else if(playerSelection == opt[1] && computerSelection == opt[2]){
        msg = result[1];
    } 
    else if(playerSelection == opt[2] && computerSelection == opt[1]){ 
        msg = result[0];
    } 
    return msg;
}

function scores(){
    
    if (msg === result[0]){
        playerScore ++; 
    }
    else if (msg === result[1]){
        computerScore ++;
    }
    else{
        //alert(result[2]);
    }
    return playerScore, computerScore;
}


function getWinner(){
    let winner;

    if(playerScore > computerScore){
        winner = "Bravo player you won";
    }
    else if (computerScore> playerScore){
        winner = "Oops! Computer wins"
    }
    else{
        winner = "Execellence Game, we have a tie"
    }
    return winner;
}

/** 
 * 
 * */ 
function gameProgress(){
    const computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult)
   
    scores();
}

function game(){
    let roundResult;

    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper, Scissor");
        playerSelection = playerSelection.toLowerCase()

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
game(); 
console.log(playerScore)
/* document.write("<br/>", );
document.write("<br/>", );
*/
document.write("The Computer Score is: ", computerScore, "<br/>", "The Player Score is: ", playerScore, "<br/>", getWinner());