function getComputerChoice() {

    let ComChoices = ['Rock', 'Paper', 'Scissors'];

    const randomChoice = ComChoices[Math.floor(Math.random() * ComChoices.length)];

    return randomChoice;    
};
function getPlayerSelection() {
    
    let input = prompt('Rock, Paper or Scissors')
    let playerSelection = input.toLowerCase();

    return playerSelection
}
