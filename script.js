function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  let computerResIndex = Math.floor(Math.random() * 3);
  let computerResponse = options[computerResIndex];
  return computerResponse;
}



function playerPlay(){
  let personResponse = prompt("Enter Rock, Paper, or Scissors:");
  personResponse = personResponse.toLowerCase();
  return personResponse;
}

function playRound() {
  let computerSelection = computerPlay();
  let personSelection = playerPlay();
  console.log(computerSelection);
  console.log(personSelection);
  if ((computerSelection === "paper" && personSelection === "rock") ||
    (computerSelection === "scissors" && personSelection === "paper") ||
    (computerSelection === "scissors" && personSelection === "paper")) {
      console.log("Computer wins");
    } else if ((computerSelection === "scissors" && personSelection === "rock") ||
      (computerSelection === "rock" && personSelection === "paper") ||
      (computerSelection === "paper" && personSelection === "scissors")) {
        console.log("Person wins");
      } else {
        console.log("It's a draw");
      }
}

playRound();
