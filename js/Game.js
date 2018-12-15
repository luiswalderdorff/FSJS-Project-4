// Einzige Art es global zu machen?
let newPhrase;

class Game {

  constructor (phrases) {
    this.missed = 0; // number of misses from the player
    this.phrases = phrases; // an array of phrases for the game
  }

  // returns a random phrase from the phrases array
  getRandomPhrase (phrases) {
    return this.phrases[Math.floor(Math.random() * phrases.length)]
  }

  // checks if a selected letter matches one in the phrase on the screen or not and calls a function, depending if it matches or not
  handleInteraction (event) {
    const screenPhrase = document.querySelectorAll("#phrase ul li");
    let numberMatched = 0;
    // checks how many/ if any letters on the screen correspond with the pressed letter
    for (let i = 0; i < screenPhrase.length; i++) {
      if (event.target.textContent.toUpperCase() === screenPhrase[i].textContent.toUpperCase()) {
        numberMatched += 1;
      }
    }
    // if no letters correspond with the clicked letter remove a life
    if (numberMatched === 0) {
      this.removeLife();
      // else reveal the corresponding letters and check for win
    } else {
      newPhrase.showMatchedLetter(event);
      this.checkForWin();
    }
  }

// called when the guess was incorrect
  removeLife () {
    this.missed += 1;
    let hearts = document.querySelector("#scoreboard ol");
    // removes one from the hearts from the Dom
    hearts.removeChild(hearts.lastElementChild);
    console.log(this.missed);
    // when you miss five times, the game is over
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  checkForWin () {
    const screenPhrase = document.querySelectorAll("#phrase ul li");
    let hidden = 0;
    // checks how many/ if any letters on the screen still have the class hide
    screenPhrase.forEach(function (element) {
      if (!element.classList.contains("hide")) {
        return true
        console.log("true");
      } else {
        return false
        console.log("false");
       }
    });
    // if none have the class hide, the player has won
    if (hidden === 0) {
      return true;
      console.log("win");
    }
  }

  gameOver () {
    $startButton.parent().show();
    $("#btn__reset").text("Restart Game");
    if(this.checkForWin()) {
      $("#game-over-message").text("You have won!");
      $("#overlay").addClass("win");
      $("#overlay").rempveClass("lose");
    } else {
      $("#game-over-message").text("You have lost");
      $("#overlay").addClass("lose");
      $("#overlay").rempveClass("win");
    }
  }

  // creates a new game
  startGame () {
    const phrase = this.getRandomPhrase(phrases);
    newPhrase = new Phrase(phrase);
    newPhrase.addPhraseToDisplay(phrase);
  }

}
