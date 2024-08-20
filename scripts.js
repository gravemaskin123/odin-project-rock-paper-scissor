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

let userChoice = getHumanInput();
console.log("Your Choice: " + userChoice)

let computerChoice = getComputerChoice();
console.log ("Computer's choice: " + computerChoice)