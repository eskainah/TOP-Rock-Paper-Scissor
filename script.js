let choice = ['rock', 'paper', 'scissor'];
/* A function that randomly return computer choice */
function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNum === 0){
        computerChoice = choice[0];
        console.log(randomNum);
    }
    else if (randomNum === 1){
        computerChoice = choice[1];
        console.log(randomNum);
    }
    else {
        computerChoice = choice[2];
        console.log(randomNum);
    }
    return computerChoice
}
 console.log(getComputerChoice())


function getPlayerChoice(){
    //let userChoice = prompt("Rock, Paper or Scissor");
 
    if ((choice[0] == userChoice.toLowerCase()) && (choice[0].length == userChoice.length)){
            console.log("r")
    } 
    else if((choice[1] == userChoice.toLowerCase()) && (choice[1].length == userChoice.length)){
        console.log("p")
    } 
    else if((choice[2] == userChoice.toLowerCase()) && (choice[2].length == userChoice.length)){
        console.log("s")
    } 
    else
    console.log("Invalid input")
}
console.log(getPlayerChoice())