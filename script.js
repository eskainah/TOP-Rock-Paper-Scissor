/* A function that randomly return computer choice */
function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNum === 1){
        computerChoice = "Rock";
    }
    else if (randomNum === 2){
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissor"
    }
}