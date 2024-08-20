function getComputerChoice() {
let random = Math.floor(Math.random() * 100)+1;
let computerChoice

if (random < 33) {
    computerChoice = "Rock";
}
else if (33 < random && random < 66) {
    computerChoice = "Paper"
}
else {
    computerChoice = "Scissor"
}
return computerChoice
}



function getHumanInput() {
let humanInput;

do {

humanInput = prompt("Rock, paper, scissor. Make your choice!")

humanInput = humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLocaleLowerCase();

// if (humanInput === "Rock" || humanInput === "Paper" || humanInput === "Scissor"){
//     console.log("Success! You chose: " + humanInput);
// }
// else {console.log("Invalid input. Please try again")}

} while (humanInput !== "Rock" && humanInput !== "Paper" && humanInput !== "Scissor");

return humanInput;
}



let humanScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return "It's a tie!"
    }

    if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper"))
    {
        return "You win! " + userChoice + " beats " + computerChoice;} 


        else {
        return "You lose! " + computerChoice + " beats " + userChoice;
    }


}

const humanSelection = getHumanInput();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);
console.log("Your Choice: " + humanSelection)
console.log ("Computer's choice: " + computerSelection)
console.log(result); 