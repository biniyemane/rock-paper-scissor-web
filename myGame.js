// script.js
function setPlayerName() {
    const playerName = document.getElementById('playerName').value;
    document.getElementById('playerNameDisplay').textContent = playerName || 'Player';
}

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerWins = (playerChoice === 'rock' && computerChoice === 'scissors') ||
                       (playerChoice === 'paper' && computerChoice === 'rock') ||
                       (playerChoice === 'scissors' && computerChoice === 'paper');
    const computerWins = (computerChoice === 'rock' && playerChoice === 'scissors') ||
                         (computerChoice === 'paper' && playerChoice === 'rock') ||
                         (computerChoice === 'scissors' && playerChoice === 'paper');

    document.getElementById('playerChoice').textContent = playerChoice;
    document.getElementById('computerChoice').textContent = computerChoice;

    let winner;
    if (playerWins) {
        winner = document.getElementById('playerNameDisplay').textContent || 'Player';
        document.getElementById('playerScore').textContent++;
    } else if (computerWins) {
        winner = 'Computer';
        document.getElementById('computerScore').textContent++;
    } else {
        winner = 'It\'s a tie';
    }
    if(winner === 'It\'s a tie'){
        document.getElementById('roundWinner').textContent = 'It\'s a tie';
    }else{
        document.getElementById('roundWinner').textContent = winner + ' wins the round!';

    }
    

    
}

function resetGame() {
    document.getElementById('playerScore').textContent = 0;
    document.getElementById('computerScore').textContent = 0;
    document.getElementById('playerChoice').textContent = '';
    document.getElementById('computerChoice').textContent = '';
    document.getElementById('roundWinner').textContent = '';
}
