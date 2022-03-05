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
        return "Invalid selection. Please select rock, paper, or scissors.";
    // Checks if the player's selection beats the computer's selection
    } else if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "scissors" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        return`You Win! ${capitalPlayerSelection} beats ${capitalComputerSelection}`;
    // Checks if the player and computer tie. 
    } else if (computerSelection === playerSelection) {
        return `Tie! You both chose ${playerSelection}`;
    // If all other arguments are not met, the player must have lost. 
    } else {
        computerScore++;
        return `You Lose! ${capitalComputerSelection} beats ${capitalPlayerSelection}`;
    }
}

// Returns the upper case of the first letter with the rest of the string added on as lower case. 
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// Game loop which plays through five times and then prints the score. 
function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("Please choose rock, paper, or scissors: ").toLowerCase();
        capitalComputerSelection = capitalize(computerSelection);
        capitalPlayerSelection = capitalize(playerSelection);
        result = playRound(computerSelection, playerSelection);
        if (result === "Invalid selection. Please select rock, paper, or scissors.") {
            i--;
        }
        console.log(result);

    }
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}

game();