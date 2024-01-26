/**
 * A function that randomly return computer choice 
 * it assign the value to a value in the array choice
*/
function getComputerChoice(){
    let computerChoice;
    const randomNum = Math.floor(Math.random()*3);

    if (randomNum === 0){
        computerChoice = "rock";
    }
    else if (randomNum=== 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissor";
    }
    return computerChoice;
}
document.write(getComputerChoice());



/* 


 */
/* let playerSelection = "scissor"

if(playerSelection ==="rock" && computerChoice ==="scissor"){
    document.write("player wins")
}
else if(playerSelection ==="scissor" && computerChoice ==="rock"){
    document.write("<br/>", "computer wins")
}


else if(playerSelection ==="paper" && computerChoice ==="rock"){
    document.write("players wins")
}
else if(playerSelection ==="rock" && computerChoice ==="paper"){
    document.write("computer wins")
}  


else if(playerSelection ==="scissor" && computerChoice ==="paper"){
    document.write("player Wins")
}
else if(playerSelection ==="paper" && computerChoice ==="scissor"){
    document.write("computer Wins")
}
 */
/* f{
    
  
   
    else if (randomNum == 1){
        return "paper"
    }
    else{
        return "scissor"
    }
    return computerChoice;
}
document.write(computerChoice)
 */

/***
 *This function get the player choice
 * it compares the input length
 * it match the input 
 * it return the input if it matches the value in the array choice 
 */
/* let playerSelection = "rock";

if (playerSelection == getComputerChoice()){
    document.write("You lose! Paper beats rock.");
} */
/**
 * This function plays a single round of the game 
 * it takes two parameter
 * return a string that declare the winner
 */