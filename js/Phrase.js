class Phrase {

  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay(phrase) {
    const phraseArray = phrase.split("");
    let phraseHTML= "";
    for (let i = 0; i < phraseArray.length; i++) {
      phraseHTML += `<li class='hide letter ${phraseArray[i]}'>${phraseArray[i]}</li>`
    }
    return $("#phrase ul").innerHTML = phraseHTML;
  }

  checkLetter() {
    // If the selected letter equals one of the letters from the phrase, return true
  }

  showMatchedLetter() {
    // If checkLetter return true on a letter, remove the hidden class
  }
}


// addPhraseToDisplay(): When the player correctly guesses a letter, the empty box is replaced with a the matched letter
// (see the showMatchedLetter() method below. Make sure the phrase displayed on the screen doesn't include spaces.
