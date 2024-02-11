let opt = ['rock', 'paper', 'scissor']; // an array of options
let result = ['Player Win', 'Player Lost', 'Tie']; // an array of result per round
let playerSelection, msg;
playerScore = 0;
computerScore = 0;

playerChoice = document.querySelector('.playerChoice')
computerChoice = document.querySelector('.computerChoice')


/**
 * This function counts the rolls
 */
function counter(){
    const count = document.querySelector('.counter');
    const userInput = document.querySelectorAll('.input'); 
    
    let roll = 1;
   
    const handleButtonClick = function() {
        if (roll < 5) {
            roll++;
            count.textContent = `${roll}`
          }
        else {
            userInput.forEach(input => {
                input.disabled = true;
        });
        }
    };
          
    userInput.forEach(input => {
        input.addEventListener("click", handleButtonClick);
    });        
}
counter()

//add click event to each buttons of he user input
    const rock = document.querySelector('#btnrock'); 
        rock.addEventListener("click",() =>{
        playerSelection = "rock";
        gameProgress();
        playerChoice.textContent = "You choose ROCK"
        console.log(getWinner())
    } ); 

    const paper = document.querySelector('#btnpaper'); 
        paper.addEventListener("click",() =>{
        playerSelection = "paper";
        gameProgress();
        playerChoice.textContent = "You choose Paper"
        console.log(getWinner())
    } ); 
  
    const scissor = document.querySelector('#btnscissor'); 
    scissor.addEventListener("click",() =>{
    playerSelection = "scissor";
    gameProgress();
    playerChoice.textContent = "You choose Scissor"
    console.log(getWinner())
} ); 


    /* function tie(){
        rock.addEventListener("click",() =>{
            playerSelection = "rock";
        });
    } */







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

/**
 * This function compares the msg with the result
 * it increment the score of player
 */

function scores(){
    
    if (msg === result[0]){
        playerScore ++; 
    }
    else if (msg === result[1]){
        computerScore ++;
    }
    
    return playerScore, computerScore;
}

/**
 * This function compares the scores and display the winner
 */

function getWinner(){
    let winner;

    if(playerScore > computerScore){
        winner = "Bravo player you won";
    }
    else if (computerScore> playerScore){
        winner = "Oops! Computer wins";
    }
    else{
        winner = "Execellence Game, we have a tie";
    }
    return winner;
}


/** 
 * This function runs if the user input a vaild input
 * it store the computer choice
 * it stores the result for each round
 * and calls the scores and breaktie functions
 * */ 

function gameProgress(){

    const computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    /** this line of calls the breaktiw function
     * if the is a tie when the game is being played
     */
  // breakTie();

   scores()

}

/**
 * This function breaks the tie when the game is playing 
 * And also settle a draw 
 */

function breakTie(){
    removeEventListener("click", true)
        if (msg == result[2]){
            alert("a tie");
            rock.addEventListener("click",() =>{
                playerSelection = "rock";
                gameProgress();})
            /* const computerSelection = getComputerChoice();
            roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);
 */
    }
}

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
//console.log(getWinner())
//document.write("The Computer Score is: ", computerScore, "<br/>", "The Player Score is: ", playerScore, "<br/>", getWinner());