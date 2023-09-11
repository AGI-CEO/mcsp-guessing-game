//guess a number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = undefined;
let count = 0;
let previousGuesses = [];

// Prompt
while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10"));
  if (isNaN(guess)) {
    alert("Please enter a number");
    count++;
    previousGuesses.push(guess);
    guess;
  } else if (guess < secretNumber) {
    alert("Too low. Guess Again.");
    count++;
    previousGuesses.push(guess);
    guess;
  } else if (guess > secretNumber) {
    alert("Too high. Guess again.");
    count++;
    previousGuesses.push(guess);
    guess;
  } else if (guess === secretNumber) {
    let previous_guesses_str = "";
    for (i = 0; i < previousGuesses.length; i++) {
      previous_guesses_str += previousGuesses[i];
      if (i < previousGuesses.length - 1) {
        previous_guesses_str += ", ";
      }
    }
    alert(
      "It only took you: " +
        count +
        " tries but you got it! You guessed:" +
        previous_guesses_str +
        "."
    );
  }
}
