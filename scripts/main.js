const GAME_OPTIONS = ['rock','paper','scissors'];

const mainHeadingElement = document.querySelector('.main-heading');
const buttonElement = document.querySelectorAll('button');
const gameElement = document.querySelector('.game');


//Create Game Envi
let scoreDiv  = document.createElement("div");
scoreDiv.classList.add(".score");
scoreDiv.style.backgroundColor = "#41B3A3";
scoreDiv.style.paddingLeft = "10px";
scoreDiv.style.paddingRight = "10px";
scoreDiv.style.display = 'none';

let scoreContent = document.createElement('p');

scoreDiv.appendChild(scoreContent);
mainHeadingElement.prepend(scoreDiv);

let gamePara = document.createElement('p');
gamePara.style.display = 'none';
gameElement.prepend(gamePara);
//


let playerScore = 0;
let computerScore = 0;

buttonElement.forEach(button => button.addEventListener('click', playGame));

function playGame(e) {
    beginRound(e);
    //console.log(e);
    if (playerScore >=5 || computerScore >= 5) {
        playerScore > computerScore ? alert("You win by: " + playerScore + " - " + computerScore) :
                                      alert("You lose by: " + playerScore + " - " + computerScore);
        
    location.reload();
    }
}
function beginRound(e) {
    console.log(e);
    let playerSelection = e.target.dataset.key;
    let computerSelection = computerPlay();

    console.log(playerSelection + " " + computerSelection);
    let roundResult = playOneRound(computerSelection, playerSelection);

    if (roundResult == 0)
        computerScore++;
    else if (roundResult == 1)
        playerScore++;       

    scoreDiv.style.display = 'block';
    scoreContent.textContent = "Player Score: " + playerScore + " - " + 
                                "Computer Score: " + (computerScore);
}

function computerPlay() {
    let randomIndex = Math.floor(Math.random() * GAME_OPTIONS.length);
    return GAME_OPTIONS[randomIndex];
}

function playOneRound(computerSelection, playerSelection) {
    gamePara.style.display = 'block';
    if (playerSelection === computerSelection) {
        gamePara.textContent = "Tie! Both chose " + playerSelection + ". No points given";
        return -1;
    }

    else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {
            gamePara.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            return 0;
        }

    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            gamePara.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            return 1;
        }
}