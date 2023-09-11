//guess a number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = undefined;

// Prompt
while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10"));
  if (isNaN(guess)) {
    alert("Please enter a number");
    guess;
  } else if (guess < secretNumber) {
    alert("Too low. Guess Again.");
    guess;
  } else if (guess > secretNumber) {
    alert("Too high. Guess again.");
    guess;
  } else if (guess === secretNumber) {
    alert("Got it!");
  }
}
