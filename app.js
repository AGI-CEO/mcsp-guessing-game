//guess a number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt
const guess = parseInt(prompt("Guess a number between 1 and 10"));

if (isNaN(guess)) {
  alert("Please enter a number");
} else if (guess < secretNumber) {
  alert("Too low");
} else if (guess > secretNumber) {
  alert("Too high");
} else if (guess === secretNumber) {
  alert("Got it!");
}
