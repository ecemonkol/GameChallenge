const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    getComputerChoice()
    getWinner()
}))


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    else if (randomNumber === 2) {
        computerChoice = "scissors"
    }
    else {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
    
};

function getWinner() {
    if (userChoice === computerChoice ) {
        result = "It's a draw!"
    }
    if (userChoice === "rock" && computerChoice === "paper" ) {
        result = "You lost!"
    }
    if (userChoice === "rock" && computerChoice === "scissors" ) {
        result = "You win!"
    }
    if (userChoice === "paper" && computerChoice === "scissors" ) {
        result = "You lost!"
    }
    if (userChoice === "paper" && computerChoice === "rock" ) {
        result = "You win!"
    }
    if (userChoice === "scissors" && computerChoice === "rock" ) {
        result = "You lost!"
    }
    if (userChoice === "scissors" && computerChoice === "paper" ) {
        result = "You win!"
    }
    
    resultDisplay.innerHTML = result

}