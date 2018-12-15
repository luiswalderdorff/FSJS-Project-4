// Variables (how to create variables in class?)

let phraseArray;
let correctLetter; //a clicked letter that has a corresponding letter on the display
let phraseHTML= "";

class Phrase {

  constructor(phrase) {
    this.phrase = phrase;
  }

  // Function to add the letters of the phrase to the webpage
  addPhraseToDisplay() {
    phraseArray = this.phrase.split("");
    // add all letters from the array to the page which arent spaces
    for (let i = 0; i < phraseArray.length; i++) {
      if (phraseArray[i] !== " ") {
        //add phraseArray[i] also as class, to be able to select them more easily
        phraseHTML += `<li class='hide letter ${phraseArray[i]}'>${phraseArray[i]}</li>`
      }
    }
    return $("#phrase ul").append(phraseHTML);
  }


  checkLetter(event) {
    for (let i = 0; i < phraseArray.length; i++) {
      // If the letter you picked fits one from the array return true and save it to the correctLetter Variable
      if (event.target.textContent.toUpperCase() === phraseArray[i].toUpperCase()) {
        correctLetter = phraseArray[i];
        return true;
      }
    }
  }

  showMatchedLetter(event) {
    const screenPhrase = document.querySelectorAll("#phrase ul li");
    if (this.checkLetter(event)) {
      for ( let i = 0; i < phraseArray.length; i++) {
        if ( event.target.textContent.toUpperCase() === screenPhrase[i].textContent.toUpperCase()) {
          screenPhrase[i].classList .remove("hide");
          screenPhrase[i].style.color = "black";
        }
      }
    }
  }
}
