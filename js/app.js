
const $startButton = $("#btn__reset");
const $buttons = $("#qwerty");
const phrases = ["Hello",
                 "Gracias",
                 "Word",
                 "Calamity"];


// Create the newGame here, so when Game is created with the $startButton eventhandler, newGame is global
let newGame;

// Hides the starting overlay
function resetDisplay () {
  $startButton.parent().hide();
}

function markButton (event) {
  // this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction()
  event.target.disabled = true;
  newGame.handleInteraction(event);
}

// Calls the resetDisplay function, when start is clicked
$startButton.click(function () {
  // Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
  resetDisplay();
  newGame = new Game(phrases)

  newGame.startGame();
});

// Calls the markButton function only on buttons
$buttons.click(function (event) {
  // Why does event.target work, but this. doesn't?
  if($(event.target).is(":button")) {
    markButton(event);
    console.log(event.target);
  }
})


// This file creates a new instance of the Game class, adds event listeners for the onscreen keyboard and a function to display the game:
// method of the Game class.






// Get an exceeds:
//
// Add keyboard functionality
// Let players use the computer keyboard to enter guesses. You'll need to use the keypress event.
// Reset the Game
// Add a button to the “success” and “failure” screens that resets the game.
// You’ll have to reset the buttons in the keyboard, generate a new random phrase, and set the number of misses to zero.
// Double check that your app properly and completely resets for subsequent games.
// Everything should work correctly and without errors every time a new games tarts.
