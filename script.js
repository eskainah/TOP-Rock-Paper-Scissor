/* A function that randomly return computer choice */
function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNum === 0){
        computerChoice = "Rock";
        console.log(randomNum);
    }
    else if (randomNum === 1){
        computerChoice = "Paper";
        console.log(randomNum);
    }
    else {
        computerChoice = "Scissor"
        console.log(randomNum);
    }
    return computerChoice
}
console.log(getComputerChoice())