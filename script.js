// Genearate random number between 0-3
// Have it pick rock paper or scissors depending on number


function computerPlay() {
    let value = Math.random() * (3);
    if (value <= 1)
    {
        return('rock');
    }
    if (value > 1 && value <= 2)
    {
        return ('paper');
    }
    if (value > 2 && value <= 3) 
    {
        return ('scissors');
    }
}
// let the player input rock paper or scissors and store that 
// make it case in sensitive
// compare player selection with computer selection
// Determine who wins
// return message based on who wins
function roundOfPlay (playerSelection, ComputerSelection){
    playerSelection = window.prompt('Do you select rock, paper, or scissors?');
    
    if (playerSelection.toLowerCase == 'rock'){
        playerSelection = 'rock';
    }
    if (playerSelection.toLowerCase == 'paper'){
        playerSelection = 'paper';
    }
    if (playerSelection.toLowerCase == 'scissors'){
        playerSelection = 'scissors';
    }
    
    ComputerSelection = computerPlay();
    
    if (playerSelection == ComputerSelection) {
        return ("It's a Tie!")    
    }
    if (playerSelection == 'rock' && ComputerSelection == 'paper') {
        return ("You Lose! Paper beats Rock");
    }
    if (playerSelection == 'paper' && ComputerSelection == 'scissors'){       
        return ("You Lose! Scissors beats Paper");
    }
    if (playerSelection == 'scissors' && ComputerSelection == 'rock'){       
        return ("You Lose! Rock beats Scissors");
    }
    if (playerSelection == 'rock' && ComputerSelection == 'scissors'){       
        return ("You Win! Rock beats Scissors");
    }
    if (playerSelection == 'paper' && ComputerSelection == 'rock'){       
        return ("You Win! Paper beats Rock");
    }
    if (playerSelection == 'scissors' && ComputerSelection == 'paper'){       
        return ("You Win! Scissors beats Paper");
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        result = roundOfPlay('a', computerPlay());
        if (result.includes('You Win!')) {
            playerScore += 1;
            console.log(result);
            console.log("The score is " + playerScore + " To " + computerScore);
        } 
        if (result.includes('You Lose!')) {
            computerScore =+ 1;
            console.log(result);
            console.log("The score is " + playerScore + " To " + computerScore);
        }
        if (result.includes('Tie!')) {
            console.log(result);
            console.log("The score is " + playerScore + " To " + computerScore);
        }
    }
    if (playerScore > computerScore) {
        console.log("The Player Has Won!");
    } else if (playerScore < computerScore) {
        console.log("The Computer Has Won!");
    } else {
        console.log("It's A Tie!");
    }

}
console.log(game());