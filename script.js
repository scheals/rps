function game(){
    let computerScore = 0;
    let playerScore = 0;
    let roundCount = 1;
    function computerPlay () {
        const signs = ["rock", "paper", "scissors"]
        let sign = signs[Math.floor(Math.random() * 3)]
        return sign
    }

    function playRound (playerSelection, computerSelection = computerPlay ()) {
        console.log(computerSelection)
        if (playerSelection === computerSelection) {
        roundCount++;    
        let result = `You chose the same sign! That's a draw. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === undefined) {
        let playerInput = prompt("Choose wisely!", "Rock, Paper or Scissors?")
            if (playerInput === null) {
            let result = "Only rocks, paper and scissors accepted!"
            return result
            } else {
            let playerSelection = playerInput.toLowerCase()
            console.log(playerSelection)
            return playRound(playerSelection); 
        }
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        roundCount++;
        let result = `Congratulations! Rock beats Scissors. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        roundCount++;
        let result = `Congratulations! Paper beats Rock. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        roundCount++;
        let result = `Congratulations! Scissors beat Paper. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        roundCount++;;
        let result = `Whoopsie! Rock got beaten by Paper. You've lost. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        roundCount++;
        let result = `Whoopsie! Paper got beaten by Scissors. You've lost. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        roundCount++;
        let result = `Whoopsie! Scissors got beaten by Rock. You've lost. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        }
        else {
        let result = "Only rocks, paper and scissors accepted!";
        console.log(result);
        return result;
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
                playRound()
                playToFive()
        }
        
    }
    function playFive () {
        if (roundCount >= 5) {
            if (playerScore === computerScore){
                    alert(`Huh! You tied. Interesting! Your final score is: You ${playerScore} AI ${computerScore}`) 
                } else if (playerScore > computerScore) {
                    alert(`Congratulations! You've won. Your final score is: You ${playerScore} AI ${computerScore}`)
                } else {
                alert(`Oh shoot... You've lost. Your final score is: You ${playerScore} AI ${computerScore}`)
            }
            }else {
                console.log(`Five rounds not played yet.`)
                playRound()
                playFive()
        }
        
    }
playRound()
playFive()
}
game();