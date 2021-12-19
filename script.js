console.log("Hello World!")

function computerPlay () {
    const signs = ["rock", "paper", "scissors"]
    let sign = signs[Math.floor(Math.random() * 3)]
    return sign
}
let computerSelection = computerPlay()
console.log(computerSelection)
let playerSelection = prompt("Choose wisely!", "Rock, Paper or Scissors?").toLowerCase()
console.log(playerSelection)
function oneRound () {
    if (playerSelection === computerSelection) {
        alert("Wow! You chose the same sign! That's a draw.")
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        alert("Congratulations! Rock beats Scissors. You've won.")
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        alert("Congratulations! Paper beats Rock. You've won.")
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        alert("Congratulations! Scissors beat Paper. You've won.")
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        alert("Whoopsie! Rock got beaten by Paper. You've lost.")
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        alert("Whoopsie! Paper got beaten by Scissors. You've lost.")
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        alert("Whoopsie! Scissors got beaten by Rock. You've lost.")
    }
    else {
        alert("Only rocks, paper and scissors accepted!")}
}
oneRound();