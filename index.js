const minNum = 1;
const maxNum = 100;
const targetNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = parseInt(prompt(`Guess a number between ${minNum} and ${maxNum}:`));
  attempts++;

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < minNum || guess > maxNum) {
    alert(`Please enter a number between ${minNum} and ${maxNum}.`);
  } else if (guess === targetNum) {
    alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
    running = false;
  } else if (guess < targetNum) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }
}