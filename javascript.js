let computerSelection;
let playerSelection;

let capitalComputerSelection;
let capitalPlayerSelection;

let computerScore = 0;
let playerScore = 0;
let tie = 0;

// The computer chooses randomly between rock, paper, and scissors. 
function computerPlay(array=["rock", "paper", "scissors"]) {
    return array[Math.floor(Math.random() * array.length)]
}

const result = document.getElementById("result");
let playerscore = document.getElementById("player-score");
let computerscore = document.getElementById("computer-score");

// Compare the player and computer selections. 
function playRound(computerSelection, playerSelection) {
    // Checks if the player entered a valid selection.
    if (playerSelection !== "paper" && playerSelection !== "rock" && playerSelection !== "scissors") {
        console.log()
        return "Invalid selection. Please select rock, paper, or scissors.";
    // Checks if the player's selection beats the computer's selection
    } else if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "scissors" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        playerscore.innerText = `Player Score: ${playerScore}`;
        result.innerText = `You Win! ${capitalPlayerSelection} beats ${capitalComputerSelection}`;
    // Checks if the player and computer tie. 
    } else if (computerSelection === playerSelection) {
        tie++;
        result.innerText = `Tie! You both chose ${playerSelection}`;
    // If all other arguments are not met, the player must have lost. 
    } else {
        computerScore++;
        computerscore.innerText = `Computer Score: ${computerScore}`;
        result.innerText = `You Lose! ${capitalComputerSelection} beats ${capitalPlayerSelection}`;
    }
}

// Returns the upper case of the first letter with the rest of the string added on as lower case. 
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function checkWinner(computerScore, playerScore) {
    if (computerScore === 5) {
        result.innerText = `Computer Wins! ${computerScore}-${playerScore}`;
        console.log(`You tied ${tie} times.`);
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    } else if (playerScore === 5) {
        result.innerText = `Player Wins! ${playerScore}-${computerScore}`;
        console.log(`You tied ${tie} times.`);
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
}

const buttonContainer = document.getElementById("button-choice-container");

buttonContainer.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    playerSelection = event.target.id;
    computerSelection = computerPlay();
    capitalComputerSelection = capitalize(computerSelection);
    capitalPlayerSelection = capitalize(playerSelection);
    playRound(computerSelection, playerSelection)
    checkWinner(computerScore, playerScore);
});

document.getElementById('reset-button').addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    tie = 0;
    result.innerText = "Click Rock, Paper, or Scissors.";
    playerscore.innerText = `Player Score: ${playerScore}`;
    computerscore.innerText = `Computer Score: ${computerScore}`;
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
});