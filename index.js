function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const winningCombination = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (playerChoice === computerSelection) {
        return "It's tie";
    }

    else if(winningCombination[playerChoice] === computerSelection) {
        return `You win! ${playerChoice} beats ${computerSelection}`;
    }

    else {
        return `You lose! ${computerSelection} beats ${playerChoice}`;
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));