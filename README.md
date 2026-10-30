# Number Guessing Game

A simple browser-based number guessing game built with HTML, CSS, and JavaScript. The computer picks a random number between 1 and 100, and you try to guess it in as few attempts as possible.

## How to Play

1. Open the game in your browser.
2. Enter a number between 1 and 100 when the prompt appears.
3. You'll be told whether your guess is **too low** or **too high**.
4. Keep guessing until you find the number.
5. When you win, the game shows how many attempts it took.

## Features

- Random target number generated every game
- Input validation for non-numbers and out-of-range guesses
- Attempt counter
- Hints after every guess

## Getting Started

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Albert123-blip/javascript-guess-game.git
   ```
2. Open the project folder:
   ```bash
   cd javascript-guess-game
   ```
3. Open `index.html` in your browser, or use the **Live Server** extension in VS Code.

## Project Structure

```
├── index.html   # Page structure
├── index.js     # Game logic
├── style.css    # Styling
└── README.md    # Project documentation
```

## Built With

- HTML
- CSS
- JavaScript

## Ideas for Improvement

- Replace `prompt()` and `alert()` with an on-page input and buttons
- Add a "Play Again" button
- Add difficulty levels with different number ranges
- Track the best score

## Author

**Albert Morka**
GitHub: [@Albert123-blip](https://github.com/Albert123-blip)
