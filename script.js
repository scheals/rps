let computerScore = 0;
let playerScore = 0;
let roundCount = 1;
let gameCount = 1;
let wasCleanedUp = true;
let playingToFive = true;
let isGameRunning = false;
let result = "Click on one of the buttons to pick your sign!"
const playButtons = document.querySelectorAll(".play-btn");
playButtons.forEach(element => attachPlayRound(element));
const results = document.querySelector(".results");
results.textContent = result;
const reset = document.querySelector(".reset-btn");
reset.addEventListener('click', function(){resetGame()});
const cleanup = document.querySelector(".cleanup-btn");
cleanup.addEventListener('click', function(){cleanupLog()});
const settings = document.querySelector(".round-settings-btn");
settings.addEventListener('click', function(){toggleSettings()});
const settingsText = document.querySelector(".round-settings-btn p");
const playerScoreText = document.querySelector(".player-score");
playerScoreText.textContent = `Your score: ${playerScore}`;
const computerScoreText = document.querySelector(".computer-score");
computerScoreText.textContent = `Computer score: ${computerScore}`;
const playersChoiceText = document.querySelector(".players-choice-icons");
playersChoiceText.textContent = `Nothing chosen so far!`;

function playRound (playerSelection, computerSelection = getAISign ()) {
    if (!isGameRunning) resetGame();
    isGameRunning = true;
    if ((roundCount > 5) && (playingToFive === false)) return;
    if (playerSelection === computerSelection) {
        result = `You chose the same sign! That's a draw.`;
        
           
        if (playingToFive) {
            playToFive()
        }else {
            playFive()
        }
        if (isGameRunning) logRound(result);
        roundCount++; 
        results.textContent = result;
        if (playerSelection === "rock") playersChoiceText.textContent = `🪨 `;
        if (playerSelection === "paper") playersChoiceText.textContent = `🧻 `;
        if (playerSelection === "scissors") playersChoiceText.textContent = `✂ `;
        if (computerSelection === "rock") playersChoiceText.textContent += `🪨`;
        if (computerSelection === "paper") playersChoiceText.textContent += `🧻`;
        if (computerSelection === "scissors") playersChoiceText.textContent += `✂`;
        return result;
    } else if (playerSelection === undefined) {
        let playerInput = prompt("Choose wisely!", "Rock, Paper or Scissors?")
        if (playerInput === null) {
        result = "Only rocks, paper and scissors accepted!"
        results.textContent = result;
        return result;
        } else {
        let playerSelection = playerInput.toLowerCase();
        console.log(playerSelection);
        return playRound(playerSelection); 
    }
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        result = `Congratulations! Rock beats Scissors. You've won.`;
        
        
        if (playingToFive) {
            playToFive()
        }else {
            playFive()
        }
        if (isGameRunning) logRound(result);
        roundCount++;
        results.textContent = result;
        playerScoreText.textContent = `Your score: ${playerScore}`;
        playersChoiceText.textContent = `🪨 `;
        playersChoiceText.textContent += `✂`;
        return result;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        result = `Congratulations! Paper beats Rock. You've won.`;
        
        
        if (playingToFive) {
            playToFive()
        }else {
            playFive()
        }
        if (isGameRunning) logRound(result);
        roundCount++;
        results.textContent = result;
        playerScoreText.textContent = `Your score: ${playerScore}`;
        playersChoiceText.textContent = `🧻 `;
        playersChoiceText.textContent += `🪨`;
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        result = `Congratulations! Scissors beat Paper. You've won.`;
        
        
        if (playingToFive) {
            playToFive()
        }else {
            playFive()
        }
        if (isGameRunning) logRound(result);
        roundCount++;
        results.textContent = result;
        playerScoreText.textContent = `Your score: ${playerScore}`;
        playersChoiceText.textContent = `✂ `;
        playersChoiceText.textContent += `🧻`;
        return result;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        result = `Whoopsie! Rock got beaten by Paper. You've lost.`;
        
        
        if (playingToFive) {
            playToFive()
        }else {
            playFive()
        }
        if (isGameRunning) logRound(result);
        roundCount++;
        results.textContent = result;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        playersChoiceText.textContent = `🪨 `;
        playersChoiceText.textContent += `🧻`;
        return result;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        result = `Whoopsie! Paper got beaten by Scissors. You've lost.`;
        
        
        if (playingToFive) {
            playToFive()
        }else {
            playFive()
        }
        if (isGameRunning) logRound(result);
        roundCount++;
        results.textContent = result;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        playersChoiceText.textContent = `🧻 `;
        playersChoiceText.textContent += `✂`;
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        result = `Whoopsie! Scissors got beaten by Rock. You've lost.`;
        
        
        if (playingToFive) {
            playToFive()
        }else {
            playFive()
        }
        if (isGameRunning) logRound(result);
        roundCount++;
        results.textContent = result;
        computerScoreText.textContent = `Computer score: ${computerScore}`;
        playersChoiceText.textContent = `✂ `;
        playersChoiceText.textContent += `🪨`;
        return result;
    }
    else {
        result = "Only rocks, paper and scissors accepted!";
        if (playingToFive) {
            playToFive()
        }else {
            playFive()
        }
        results.textContent = result;
        return result;
    }
}

function logRound (result){
    const gameLog = document.querySelector(".game-log");
    if ((gameCount % 3 === 0) && (wasCleanedUp === false)) {
        const logEntries = document.querySelectorAll('.game-log-entry');
        logEntries.forEach(element => gameLog.removeChild(element));
        wasCleanedUp = true;
        }
        if ((gameCount % 3) !== 0) wasCleanedUp = false;
    if (roundCount === 1) {
        const gameNumber = document.createElement('p');
        gameNumber.textContent = `Game ${gameCount}`;
        gameNumber.setAttribute('class', 'game-log-entry');
        gameLog.appendChild(gameNumber);
    }
    if (!playingToFive) {
        if (roundCount < 5) { 
            const roundNumber = document.createElement('p');
            const roundResult = document.createElement('p');
            roundNumber.textContent = `Round ${roundCount}`;
            roundResult.textContent = `${result}`
            + ` Current score: You ${playerScore} Computer ${computerScore}`;
            roundNumber.setAttribute('class', 'game-log-entry');
            roundResult.setAttribute('class', 'game-log-entry');
            gameLog.appendChild(roundNumber);
            gameLog.appendChild(roundResult);
        } else {
            const roundNumber = document.createElement('p');
            const roundResult = document.createElement('p');
            roundNumber.textContent = `Round ${roundCount}`;
            roundResult.textContent = `${result}`;
            roundNumber.setAttribute('class', 'game-log-entry');
            roundResult.setAttribute('class', 'game-log-entry');
            gameLog.appendChild(roundNumber);
            gameLog.appendChild(roundResult);
            gameCount++;
        }
    }
    if(playingToFive) {
        if (isGameRunning) { 
            const roundNumber = document.createElement('p');
            const roundResult = document.createElement('p');
            roundNumber.textContent = `Round ${roundCount}`;
            roundResult.textContent = `${result}`
            + ` Current score: You ${playerScore} Computer ${computerScore}`;
            roundNumber.setAttribute('class', 'game-log-entry');
            roundResult.setAttribute('class', 'game-log-entry');
            gameLog.appendChild(roundNumber);
            gameLog.appendChild(roundResult);
        } else {
            const roundNumber = document.createElement('p');
            const roundResult = document.createElement('p');
            roundNumber.textContent = `Round ${roundCount}`;
            roundResult.textContent = `${result}`;
            roundNumber.setAttribute('class', 'game-log-entry');
            roundResult.setAttribute('class', 'game-log-entry');
            gameLog.appendChild(roundNumber);
            gameLog.appendChild(roundResult);
            gameCount++;
        }
    }
}

function playFive () {
    if (roundCount > 4) {
        if (playerScore === computerScore){
            result = `Huh! You tied the game. Interesting! Your final score is: You ${playerScore} AI ${computerScore}`;
            isGameRunning = false;
            logRound(result);
            results.textContent = result;
        
            return result;
            } else if (playerScore > computerScore) {
                result = `Congratulations! You've won the game. Your final score is: You ${playerScore} AI ${computerScore}`;
                isGameRunning = false;
                logRound(result);
                results.textContent = result;
                
                return result;
            } else {
                result = `Oh shoot... You've lost the game. Your final score is: You ${playerScore} AI ${computerScore}`;
                isGameRunning = false;
                logRound(result);
                results.textContent = result;
                
                return result;
        }
    }else {
        console.log(`Five rounds not played yet.`)
    }
    
}

function playToFive () {
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore === computerScore){
            result = `Huh! You tied the game. Interesting! Your final score is: You ${playerScore} AI ${computerScore}`;
            isGameRunning = false;
            logRound(result);
            results.textContent = result;
            
            return result; 
        } else if (playerScore > computerScore) {
            result = `Congratulations! You've won the game. Your final score is: You ${playerScore} AI ${computerScore}`;
            isGameRunning = false;
            logRound(result);
            results.textContent = result;
            
            return result;
        } else {
            result = `Oh shoot... You've lost the game. Your final score is: You ${playerScore} AI ${computerScore}`;
            isGameRunning = false;
            logRound(result);
            results.textContent = result;
            
            return result;
        }
    }else {
        console.log(`Neither of scores is equal or higher to 5.`)
    }
}
function toggleSettings() {
    if (isGameRunning) return console.log("Game in progress, unable to comply.")
    if (playingToFive) {
        playingToFive = false; 
        settingsText.textContent = "Play to five wins";
        console.log(playingToFive);
    } else{
        playingToFive = true;
        settingsText.textContent = "Play five rounds";
        console.log(playingToFive);
    }
}
function resetGame(){
    roundCount = 1;
    playerScore = 0;
    computerScore = 0;
    isGameRunning = false;
    result = "Game reset. Click on one of the buttons to pick your sign!";
    results.textContent = result;
    playerScoreText.textContent = `Your score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    playersChoiceText.textContent = `Nothing chosen so far!`;
    return console.log("Round count and scores have been reset.");
}
function cleanupLog() {
    const gameLog = document.querySelector(".game-log");
    const logEntries = document.querySelectorAll('.game-log-entry');
    logEntries.forEach(element => gameLog.removeChild(element));
}

function getAISign () {
    const signs = ["rock", "paper", "scissors"]
    let sign = signs[Math.floor(Math.random() * 3)]
    return sign
}

function attachPlayRound(element){
    return element.addEventListener('click', function(){playRound(`${element.dataset.sign}`)});
    
}
