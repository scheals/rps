console.log("Hello World!")

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
        alert(`You chose the same sign! That's a draw. Current score: You ${playerScore} AI ${computerScore}`)
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        alert(`Congratulations! Rock beats Scissors. You've won. Current score: You ${playerScore} AI ${computerScore}`)
        } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++
        alert(`Congratulations! Paper beats Rock. You've won. Current score: You ${playerScore} AI ${computerScore}`)
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        alert(`Congratulations! Scissors beat Paper. You've won. Current score: You ${playerScore} AI ${computerScore}`)
        } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++
        alert(`Whoopsie! Rock got beaten by Paper. You've lost. Current score: You ${playerScore} AI ${computerScore}`)
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++
        alert(`Whoopsie! Paper got beaten by Scissors. You've lost. Current score: You ${playerScore} AI ${computerScore}`)
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++
        alert(`Whoopsie! Scissors got beaten by Rock. You've lost. Current score: You ${playerScore} AI ${computerScore}`)
        }
        else {
        alert("Only rocks, paper and scissors accepted!")}

    // if (playerScore >= 5 || computerScore >= 5) {
    //     } else if (playerScore === computerScore){
    //     alert(`Huh! You tied. Interesting! Your final score is: You ${playerScore} AI ${computerScore}`)
    //     } else if (playerScore > computerScore) {
    //         alert(`Congratulations! You've won. Your final score is: You ${playerScore} AI ${computerScore}`)
    //     } else {
    //         alert(`Oh shoot... You've lost. Yoru final score is: You ${playerScore} AI ${computerScore}`)
    //     }
    
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
}


game();