const choices = ["rock","paper","scissors"]
const score =[]

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logScore();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    score.push(winner);   
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice(){
    let input = prompt('Type Rock, Paper, or Scissors');
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt("Check Spelling; Capitalization doesn't matter");
        while (input == null){
            prompt('Type Rock, Paper, or Scissors');
        }
        input = input.toLowerCase;
        check = validateInput(input);
    }
    return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC) {
        return 'Tie';
    } else if (
      (choiceP === "rock" && choiceC === "scissors") || 
      (choiceP === 'paper' && choiceC === 'rock') || 
      (choiceP === 'scissors' && choiceC === 'paper')
    ){
        return 'Player wins';
    } else{
        return 'Computer wins';
    }
}

function logScore() {
    let playerWins = score.filter((item) => item == "Player wins").length;
    let computerWins = score.filter((item) => item == 'Computer wins').length;
    let ties = score.filter((item) => item == 'Tie').length;
    console.log("Results:")
    console.log(`Player wins: ${playerWins}`);
    console.log('Computer wins: ', computerWins)
    console.log('Ties: ', ties)
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round: ', round);
    console.log('Player chose: ', playerChoice);
    console.log('Computer chose: ', computerChoice);
    console.log(winner, 'won the round!');
    console.log('-------------------------------------------');
}

game();