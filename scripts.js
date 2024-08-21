function getComputerChoice() {
  let random = Math.floor(Math.random() * 100) + 1;
  let computerChoice;

  if (random < 33) {
    computerChoice = "Rock";
  } else if (33 < random && random < 66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissor";
  }
  return computerChoice;
}

function getHumanInput() {
  let humanInput;

  do {
    humanInput = prompt("Rock, paper, scissor. Make your choice!");

    humanInput =
      humanInput.charAt(0).toUpperCase() +
      humanInput.slice(1).toLocaleLowerCase();
  } while (
    humanInput !== "Rock" &&
    humanInput !== "Paper" &&
    humanInput !== "Scissor"
  );

  return humanInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  }

  if (
    (userChoice === "Rock" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissor" && computerChoice === "Paper")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let gameRound = 1; gameRound <= 5; gameRound++) {
    const humanSelection = getHumanInput();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    console.log("Round " + gameRound);
    console.log("Your Choice: " + humanSelection);
    console.log("Computer's Choice: " + computerSelection);

    if (result === "human") {
      console.log("You win! " + humanSelection + " beats " + computerSelection);
      humanScore++;
    } else if (result === "computer") {
      console.log(
        "You lose! " + computerSelection + " beats " + humanSelection
      );
      computerScore++;
    } else {
      console.log("It's a tie!");
    }

    console.log("Current Score:");
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("------------------------------");
  }

  console.log("Final Score:");
  console.log("Your Score: " + humanScore);
  console.log("Computer Score: " + computerScore);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

// Start the game
playGame();
