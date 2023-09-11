//guess a number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = undefined;
let count = 0;

// Prompt
while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10"));
  if (isNaN(guess)) {
    alert("Please enter a number");
    count++;
    guess;
  } else if (guess < secretNumber) {
    alert("Too low. Guess Again.");
    count++;
    guess;
  } else if (guess > secretNumber) {
    alert("Too high. Guess again.");
    count++;
    guess;
  } else if (guess === secretNumber) {
    alert("It only took you: " + count + " tries but you got it!");
  }
}
