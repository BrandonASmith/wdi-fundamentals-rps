
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
     return move || getInput()
}

function getComputerMove(move) {
    return move || randomPlay()
}    

function getWinner(playerMove,computerMove) {
    var winner;

    if ( playerMove === computerMove ){
        winner = 'tie'
    }
    if ( playerMove === "rock" && computerMove === "scissors"){
        winner = 'player'
    }
    if ( playerMove === "paper" && computerMove === "rock"){
        winner = 'player'
    }
    if ( playerMove === "scissors" && computerMove === "paper"){
        winner = 'player'
    }
    if ( playerMove === "rock" && computerMove === "paper"){
        winner = 'computer'
    }
    if ( playerMove === "paper" && computerMove === "scissors"){
        winner = 'computer'
    }
    if ( playerMove === "scissors" && computerMove === "rock"){
        winner = 'computer'    
    }    

    return winner;
}

function playToFive() {
    var
      playerWins = 0,
      computerWins = 0,
      winner
 
    
    while ( playerWins < 5 && computerWins < 5 ){
      winner = getWinner( getPlayerMove(), getComputerMove() )
      console.log( "Winner:", winner )
      if ( winner === "player" ){
          playerWins += 1
      } else if ( winner === "computer" ){
          computerWins += 1
      }
    }
    
    return [ playerWins, computerWins ]
}
console.log("startgame")
console.log( playToFive() )
console.log("Game OVER")