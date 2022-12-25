function getComputerChoice() {

    let ComChoices = ['rock', 'paper', 'scissors'];

    const randomChoice = ComChoices[Math.floor(Math.random() * ComChoices.length)];

    return randomChoice;    

};

function getPlayerSelection() {

    
    let input = prompt('Rock, Paper or Scissors')
    let playerSelection = input.toLowerCase();

    return playerSelection
};

    let cpuScore = 0;
    let playerScore= 0;

function rpsRound(playerSelection, computerChoice) {


    if ((playerSelection === 'rock') && (computerChoice=== 'scissors')) {
        playerScore++
        return 'You win. Rock beats Scissors!'
        
        
    } else if ((playerSelection === 'paper') && (computerChoice === 'rock')) {
        playerScore++
        return 'You win. Paper beats Rock!'
        

        
    } else if ((playerSelection === 'scissors') && (computerChoice === 'paper')) {
        playerScore++
        return 'You win. Scissor beats Paper!'
        

        
    } else if ((playerSelection === 'scissors') && (computerChoice === 'rock')) {
        cpuScore++
        return 'You lose. Rock beats Scissors!'
        
    
    } else if ((playerSelection === 'rock') && (computerChoice === 'paper')) {
        cpuScore++
        return 'You lose. Paper beats Rock!'
        

    
    } else if ((playerSelection === 'paper') && (computerChoice === 'scissor')) {
        cpuScore++
        return 'You lose. Scissor beats Paper!'
        

    
    } else if (playerSelection === computerChoice) {
        return 'Its a draw!!!'
        
    } else {
        return 'Something went wrong. Did you type a proper input?'
    }
    
    };

for (let i = 0; i < 5; i++) {

    let computerChoice = getComputerChoice();
    let playerSelection = getPlayerSelection();

    console.log(rpsRound(playerSelection, computerChoice));
    console.log(`Computer Score: ${cpuScore} + Player Score: ${playerScore}`);
  
}

if (playerScore > cpuScore) {
    console.log('You Won!!!');
} else if (cpuScore > playerScore) {
    console.log('You lost');
} else {
    console.log('Is it a tie?');
}







