function getComputerChoice() {

    let ComChoices = ['rock', 'paper', 'scissors'];

    const randomChoice = ComChoices[Math.floor(Math.random() * ComChoices.length)];

    return randomChoice;    

};

function getPlayerSelection() {

    
    let input = prompt('Rock, Paper or Scissors')
    let playerSelection = input.toLowerCase();

    return playerSelection
}




function decideWinner(playerSelection, computerChoice) {

    computerChoice = getComputerChoice() ;
    playerSelection = getPlayerSelection();
    
    console.log(playerSelection);
    console.log(computerChoice);

    
if ((playerSelection === 'rock') && (computerChoice=== 'scissors')) {
    return 'You win. Rock beats Scissors!'
    
} else if ((playerSelection === 'paper') && (computerChoice === 'rock')) {
    return 'You win. Paper beats Rock!'
    
} else if ((playerSelection === 'scissors') && (computerChoice === 'paper')) {
    return 'You win. Scissor beats Paper!'
    
} else if ((playerSelection === 'scissors') && (computerChoice === 'rock')) {
    return 'You lose. Rock beats Scissors!'

} else if ((playerSelection === 'rock') && (computerChoice === 'paper')) {
    return 'You lose. Paper beats Rock!'

} else if ((playerSelection === 'paper') && (computerChoice === 'scissor')) {
    return 'You lose. Scissor beats Paper!'

} else if (playerSelection === computerChoice) {
    return 'Its a draw!!!'
    
} else {
    return 'Something went wrong. Did you type a proper input?'
}
    
}

console.log(decideWinner());
