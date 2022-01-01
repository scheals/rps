let computerScore = 0;
let playerScore = 0;
let roundCount = 1;
let result = "Click on one of the buttons to pick your sign!"
const playButtons = document.querySelectorAll(".play-btn");
playButtons.forEach(element => attachPlayRound(element));
const results = document.querySelector(".results");
results.textContent = result;
const reset = document.querySelector(".reset-btn");
reset.addEventListener('click', function(){resetGame()})

function playRound (playerSelection, computerSelection = getAISign ()) {
    if (roundCount > 5) return;
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        roundCount++;    
        result = `You chose the same sign! That's a draw. Current score: You ${playerScore} AI ${computerScore}`;
        playFive()
        results.textContent = result;
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
        roundCount++;
        result = `Congratulations! Rock beats Scissors. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        playFive()
        results.textContent = result;
        return result;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        roundCount++;
        result = `Congratulations! Paper beats Rock. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        playFive()
        results.textContent = result;
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        roundCount++;
        result = `Congratulations! Scissors beat Paper. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        playFive()
        results.textContent = result;
        return result;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        roundCount++;;
        result = `Whoopsie! Rock got beaten by Paper. You've lost. Current score: You ${playerScore} AI ${computerScore}`;
        playFive()
        results.textContent = result;
        return result;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        roundCount++;
        result = `Whoopsie! Paper got beaten by Scissors. You've lost. Current score: You ${playerScore} AI ${computerScore}`;
        playFive()
        results.textContent = result;
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        roundCount++;
        result = `Whoopsie! Scissors got beaten by Rock. You've lost. Current score: You ${playerScore} AI ${computerScore}`;
        results.textContent = result;
        playFive()
        return result;
    }
    else {
        result = "Only rocks, paper and scissors accepted!";
        results.textContent = result;
        playFive()
        return result;
    }
}

function getAISign () {
    const signs = ["rock", "paper", "scissors"]
    let sign = signs[Math.floor(Math.random() * 3)]
    return sign
}

function attachPlayRound(element){
    return element.addEventListener('click', function(){playRound(`${element.dataset.sign}`)});
    
}

function playFive () {
    console.log(roundCount)
    if (roundCount > 5) {
        if (playerScore === computerScore){
            result = `Huh! You tied. Interesting! Your final score is: You ${playerScore} AI ${computerScore}`;
            results.textContent = result;
                return result;
            } else if (playerScore > computerScore) {
                result = `Congratulations! You've won. Your final score is: You ${playerScore} AI ${computerScore}`;
                results.textContent = result;
                return result;
            } else {
                result = `Oh shoot... You've lost. Your final score is: You ${playerScore} AI ${computerScore}`;
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
                alert(`Huh! You tied. Interesting! Your final score is: You ${playerScore} AI ${computerScore}`) 
            } else if (playerScore > computerScore) {
                alert(`Congratulations! You've won. Your final score is: You ${playerScore} AI ${computerScore}`)
            } else {
            alert(`Oh shoot... You've lost. Your final score is: You ${playerScore} AI ${computerScore}`)
        }
        }else {
            console.log(`Neither of scores is equal or higher to 5.`)
    }
}

function resetGame(){
    roundCount = 1;
    playerScore = 0;
    computerScore = 0;
    result = "Game reset. Click on one of the buttons to pick your sign!";
    results.textContent = result;
    return console.log("Round count and scores have been reset.");
}