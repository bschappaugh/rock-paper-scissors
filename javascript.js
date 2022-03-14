let computerSelection;
let playerSelection;

let capitalComputerSelection;
let capitalPlayerSelection;

let computerScore = 0;
let playerScore = 0;

// The computer chooses randomly between rock, paper, and scissors. 
function computerPlay(array=["rock", "paper", "scissors"]) {
    return array[Math.floor(Math.random() * array.length)]
}

// Compare the player and computer selections. 
function playRound(computerSelection, playerSelection) {
    // Checks if the player entered a valid selection.
    if (playerSelection !== "paper" && playerSelection !== "rock" && playerSelection !== "scissors") {
        console.log()
        return "Invalid selection. Please select rock, paper, or scissors.";
    // Checks if the player's selection beats the computer's selection
    } else if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "scissors" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        console.log(`You Win! ${capitalPlayerSelection} beats ${capitalComputerSelection}`);
        return`You Win! ${capitalPlayerSelection} beats ${capitalComputerSelection}`;
    // Checks if the player and computer tie. 
    } else if (computerSelection === playerSelection) {
        console.log(`Tie! You both chose ${playerSelection}`);
        return `Tie! You both chose ${playerSelection}`;
    // If all other arguments are not met, the player must have lost. 
    } else {
        computerScore++;
        console.log(`You Lose! ${capitalComputerSelection} beats ${capitalPlayerSelection}`);
        return `You Lose! ${capitalComputerSelection} beats ${capitalPlayerSelection}`;
    }
}

// Returns the upper case of the first letter with the rest of the string added on as lower case. 
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

document.getElementById("rock").addEventListener("click", function() {
    computerSelection = computerPlay();
    playerSelection = "rock";
    capitalComputerSelection = capitalize(computerSelection);
    capitalPlayerSelection = capitalize(playerSelection);
    playRound(computerSelection, playerSelection)
});
document.getElementById("paper").addEventListener("click", function() {
    computerSelection = computerPlay();
    playerSelection = "paper";
    capitalComputerSelection = capitalize(computerSelection);
    capitalPlayerSelection = capitalize(playerSelection);
    playRound(computerPlay(), "paper")
});
document.getElementById("scissors").addEventListener("click", function() {
    computerSelection = computerPlay();
    playerSelection = "scissors";
    capitalComputerSelection = capitalize(computerSelection);
    capitalPlayerSelection = capitalize(playerSelection);
    playRound(computerPlay(), "scissors")
});