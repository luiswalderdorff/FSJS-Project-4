
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
  event.target.classList.add("chosen");
  newGame.handleInteraction(event);
}

// Calls the resetDisplay function, when start is clicked
$startButton.click(function () {
  if ($startButton.text() === "Start Game") {
    resetDisplay();
    newGame = new Game(phrases)

    newGame.startGame();
  } else {
    // If button text changes, reload page
    location.reload();
  }
});

// Calls the markButton function only on buttons
$buttons.click(function (event) {
  if($(event.target).is(":button")) {
    markButton(event);
  }
})

$(document).keypress(function (event) {
  const $keys = $(".key");
  // next three lines from https://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed
  event = event || window.event;
  var charCode = event.keyCode || event.which;
  var charStr = String.fromCharCode(charCode);
  for ( let i = 0; i < $keys.length; i++ ) {
    if (charStr === $keys[i].textContent ) { //Why does textContent work, but not text()?
      $keys[i].click();
    }
  }
})
