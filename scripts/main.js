const GAME_OPTIONS = ['rock','paper','scissors'];
function computerPlay() {
    let randomIndex = Math.floor(Math.random() * GAME_OPTIONS.length);
    return GAME_OPTIONS[randomIndex];
}

function playerPlay() {
    let playerChoice = prompt("Enter your selection");
    return playerChoice.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie! Both chose " + playerSelection + ". No points given");
        return -1;
    }

    else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            return 0;
        }

    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            return 1;
        }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        console.log("Computer choice: " + computerSelection + " Player choice: " + playerSelection);
        let roundResult = playRound(computerSelection, playerSelection);
        if (roundResult === 0) {
            computerScore++;
        } else if (roundResult === 1) {
            playerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("Player wins! by: " + playerScore + "-" + computerScore);
    } else if (playerScore < computerScore) {
        console.log("Computer wins! by: " + computerScore + "-" + playerScore);
    }
}

console.log("This is a 5 round game.");
game();


