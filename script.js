/**
 * A function that randomly return computer choice 
 * it assign the value to a value in the array choice
*/
let opt = ['rock', 'paper', 'scissor']
let playerScore;
let computerScore;
let result = ['Player Win', 'Player Lost', 'Tie'];
let msg;




function getComputerChoice(){
   
    let computerChoice;
    const randomNum = Math.floor(Math.random()*opt.length);
    console.log("the random num is ")
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
let playerSelection;
 function playRound(playerSelection, computerSelection){
    playerSelection = "rock";
   
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === computerSelection){ //works
        msg = result[2];
    } 
    
    else if(playerSelection == "scissor" && computerSelection == "rock"){ //works
        msg = result[1]; 
    } 
    else if(playerSelection == "rock" && computerSelection == "scissor"){ //works
        msg = result[0];
    } 

    else if(playerSelection == "rock" && computerSelection == "paper"){ //works
        msg = result[1];
    } 
    else if(playerSelection == "paper" && computerSelection == "rock"){ //works
        msg = result[0];
    } 

    else if(playerSelection == "paper" && computerSelection == "scissor"){ //works
        msg = result[1];
    } 
    else if(playerSelection == "scissor" && computerSelection == "paper"){ //works
        msg = result[0];
    } 
    
    return msg;
}
document.write("<br/>",playRound(playerSelection, getComputerChoice()));


function scores(){
    playerScore = 0;
    computerScore = 0;
    if (msg === result[0]){
        playerScore ++;
        console.log(playerScore)
    }
    else if (msg === result[1]){
        computerScore ++;
        console.log(computerScore)
    }
    else{
        //alert(result[2]);
    }
    return playerScore, computerScore;
}
scores();



/* function game(){
    let playerSelection

    for(let i =0; i<5; i++){
        playerSelection = prompt("Rock, Paper. Scissor ");
    }
    return playerSelection;
}
game(); */