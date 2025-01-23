let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = "";
    let choice = Math.random();
    if (choice > 0 && choice <=0.3){
        computerChoice = "Rock";
    }else if (choice > 0.3 && choice <= 0.6) {
        computerChoice = "Paper";
    }else if (choice > 0.6 && choice < 1) {
        computerChoice = "Scissors";
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
function playRound ( computerChoic, humanChoic) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    let result = "";

    if (humanChoice === "Rock"){
        if (computerChoice === "Rock"){
            result = "Its a tie";
        }else if (computerChoice === "Paper"){
            computerScore += 1;
            result = "Computer won this round";
        }else if (computerChoice === "Scissors"){
            humanScore += 1;
            result = "Human won this round";
        }
    }else if (humanChoice === "Paper"){
        if (computerChoice === "Rock") {
            humanScore += 1;
            result = "Human won this round";
        }else if (computerChoice === "Paper"){
            result = "Its a tie";
        }else if (computerChoice === "Scissors"){
            computerScore += 1;
            result = "Computer won this round";
        }
    }else if (humanChoice === "Scissors"){
        if (computerChoice === "Rock"){
            computerScore += 1;
            result = "Computer won this round";
        }else if (computerChoice === "Paper"){
            humanScore += 1;
            result = "Human won this round";
        }else if (computerChoice === "Scissors"){
            result = "This is a tie";
        }
    }

    return result;
}

console.log(`${playRound()}\n ${getComputerChoice()}\n ${getHumanChoice()}`);

