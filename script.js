/**
 * A function that randomly return computer choice 
 * it assign the value to a value in the array choice
*/
let opt = ['rock', 'paper', 'scissor']

function getComputerChoice(){
   
    let computerChoice;
    const randomNum = Math.floor(Math.random()*opt.length);
    let ans = randomNum;
    console.log("the random num is ", ans)
    if (randomNum === 0){
        computerChoice = opt[0];
        alert(computerChoice);
    }
    else if (randomNum=== 1){
        computerChoice = opt[1];
        console.log(computerChoice);
    }
    else{
        computerChoice = opt[2];
        console.log(computerChoice);
    }
    return computerChoice;
   
}

/***
 * This function plays a single round of the game 
 * it takes two parameter
 * return a string that declare the winner
 * it compares the string input by user length
 */
let playerSelection
 function playRound(playerSelection, computerSelection){
    let msg;
    playerSelection = prompt("Rock, Paper. Scissor")
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === computerSelection){ //works
        msg = "tie";
    } 
    
    else if(playerSelection == "scissor" && computerSelection == "rock"){ //works
        msg = "computer wins";
    } 
    else if(playerSelection == "rock" && computerSelection == "scissor"){ //works
        msg = "player wins";
    } 

    else if(playerSelection == "rock" && computerSelection == "paper"){ //works
        msg = "computer wins";
    } 
    else if(playerSelection == "paper" && computerSelection == "rock"){ //works
        msg = "player wins";
    } 

    else if(playerSelection == "paper" && computerSelection == "scissor"){ //works
        msg = "computer wins";
    } 
    else if(playerSelection == "scissor" && computerSelection == "paper"){ //works
        msg = "player wins";
    } 

    return msg;
}
document.write(playRound(playerSelection, getComputerChoice()))