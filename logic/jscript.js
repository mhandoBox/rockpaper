let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let computerChoice = "";
    let choice = Math.random();
    if (choice > 0 && choice <=0.3){
        computerChoice = "rock";
    }else if (choice > 0.3 && choice <= 0.6) {
        computerChoice = "paper";
    }else if (choice > 0.6 && choice < 1) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice () {
    let humanChoice = "";
    let num = parseInt(prompt("Please Choose:\n 1.Rock \n 2.Paper \n 3.Scissors"));
    if (num === 1) {
        humanChoice = "Rock";
    }else if (num === 2){
        humanChoice = "Paper";
    }else if (num === 3) {
        humanChoice = "Scissors"
    }
    return humanChoice;
}
console.log(`Computer Chose: ${getComputerChoice()}`);
console.log(`Human Chose: ${getHumanChoice()}`);
