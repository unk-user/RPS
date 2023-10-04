function game() {
    let computerPoints = 0
    let playerPoints = 0
    for(let i = 0; i < 5; i++){
    let playerSelection = prompt("Enter Your Choice");
    function getComputerChoice() {
    let randomN = Math.floor(Math.random() * 3);
    let choice;
    switch (randomN) {
        case 0:
            return choice = "Rock";
        case 1: 
            return choice = "Paper";
        case 2: 
            return choice = "Scissors";  
    }
}
 const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection === computerSelection){
        return "Its a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerPoints++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerPoints++;
        return "You Lose! Paper beats Rock"; 
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerPoints++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerPoints++;
        return "You Lose! Scissors beat Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerPoints++;
        return "You Win! Scissors beat Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerPoints++;
        return "You Lose! Rock beats Scissors";
    } 
}
alert(playRound(playerSelection, computerSelection)); }
 if(computerPoints > playerPoints){
    return `Computer is the Winner! Score: ${playerPoints}:${computerPoints} `;
 } else if(playerPoints > computerPoints){
    return `You are the Winner! score: ${playerPoints}:${computerPoints} `;
 } else {
    return `Its a Tie! score: ${playerPoints}:${computerPoints}`;
 }
}
let gameResult = game();
alert(gameResult);