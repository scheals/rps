function game(){
    let computerScore = 0;
    let playerScore = 0;

    function computerPlay () {
        const signs = ["rock", "paper", "scissors"]
        let sign = signs[Math.floor(Math.random() * 3)]
        return sign
    }

    function playRound (playerSelection, computerSelection) {
        console.log(playerSelection)
        console.log(computerSelection)
        if (playerSelection === computerSelection) {
        computerScore++
        playerScore++
        let result = `You chose the same sign! That's a draw. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === null) {
        let result = `Those are not the droids you are looking for!`;
        return result;
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        let result = `Congratulations! Rock beats Scissors. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        let result = `Congratulations! Paper beats Rock. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        let result = `Congratulations! Scissors beat Paper. You've won. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        let result = `Whoopsie! Rock got beaten by Paper. You've lost. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++
        let result = `Whoopsie! Paper got beaten by Scissors. You've lost. Current score: You ${playerScore} AI ${computerScore}`;
        console.log(result);
        return result;
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++
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

    function playFive () {
        if (playerScore >= 5 || computerScore >= 5) {
        }else if (playerScore === computerScore){
        alert(`Huh! You tied. Interesting! Your final score is: You ${playerScore} AI ${computerScore}`)
        } else if (playerScore > computerScore) {
        alert(`Congratulations! You've won. Your final score is: You ${playerScore} AI ${computerScore}`)
        } else {
        alert(`Oh shoot... You've lost. Your final score is: You ${playerScore} AI ${computerScore}`)
        }
    
    }
    playRound(prompt("Choose wisely!", "Rock, Paper or Scissors?").toLowerCase(), computerPlay());
    console.log(playerScore);
    console.log(computerScore);
    playRound(prompt("Choose wisely!", "Rock, Paper or Scissors?").toLowerCase(), computerPlay());
    console.log(playerScore);
    console.log(computerScore);
    playRound(prompt("Choose wisely!", "Rock, Paper or Scissors?").toLowerCase(), computerPlay());
    console.log(playerScore);
    console.log(computerScore);
    playRound(prompt("Choose wisely!", "Rock, Paper or Scissors?").toLowerCase(), computerPlay());
    console.log(playerScore);
    console.log(computerScore);
    playRound(prompt("Choose wisely!", "Rock, Paper or Scissors?").toLowerCase(), computerPlay());
    console.log(playerScore);
    console.log(computerScore);
    playFive()
}
game();