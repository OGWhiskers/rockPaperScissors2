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




function rpsRound(playerSelection, computerChoice) {

    computerChoice = getComputerChoice() ;
    playerSelection = getPlayerSelection();
    
    // console.log(playerSelection);
    // console.log(computerChoice);

    function decideWinner(){

        let winner = '';

        if((playerSelection === 'rock') && (computerChoice=== 'scissors')){
            winner = 'Player';

        } else if ((playerSelection === 'paper') && (computerChoice === 'rock')) {
            winner = 'Player'

        } else if ((playerSelection === 'scissors') && (computerChoice === 'paper')) {
            winner = 'Player'

        } else if ((playerSelection === 'scissors') && (computerChoice === 'rock')) {
            winner = 'CPU';

        } else if ((playerSelection === 'rock') && (computerChoice === 'paper')) {
            winner = 'CPU';

        } else if ((playerSelection === 'paper') && (computerChoice === 'scissor')) {
            winner = 'CPU';

        } else if (playerSelection === computerChoice) {
            winner = ''
        }

            
        return winner;
    };



decideWinner();



    function addScore(){

        let cpuScore = 0;
        let playerScore= 0;
        let win = decideWinner();
        
        console.log(win);

        if  (win === 'CPU'){     

            console.log(`The Computers Score is: ${cpuScore += 1}`); 
            return `The Computers Score is: ${cpuScore += 1}`

        } else if (win === 'Player'){

            console.log(`The Computers Score is: ${playerScore += 1}`);
            return `The Computers Score is: ${playerScore += 1}`
            
        } 

    }
addScore();
    


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
console.log(rpsRound());
