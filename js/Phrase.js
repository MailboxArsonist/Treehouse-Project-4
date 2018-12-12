// The class should include a constructor that accepts a phrase as an argument. The class should include the following methods:
// addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one list item for each letter. See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the game starts. When the player correctly guesses a letter, the empty box is replaced with a the matched letter (see the showMatchedLetter() method below. Make sure the phrase displayed on the screen doesn't include spaces.
// checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
// showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.

//Create constructor called Phrase

//add constructor, that accepts phrase as an argument
class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

  /*
  *
  * Method will add a random phrase to the display.
  */
  addPhraseToDisplay(){
    //get ul to append to
    const ul = document.getElementById('phrase').firstElementChild;
    //loop over this.phrase
    for(let i = 0; i < this.phrase.length; i++){
      //for each letter create an li and set the phrase[index] to textContent.
      let li = document.createElement('li');
      li.textContent = this.phrase[i];
      //if the textContent is '' its a space add class of hide space
      //else add class of hide letter
      if(li.textContent === ' '){
        li.classList.add('hide', 'space');
      } else {
        li.classList.add('hide', 'letter');
      }
      //append each li to the ul
      ul.appendChild(li);
    }
  }
  /*
  *
  * Method check the letter to phrase, return true
  */
  checkLetter(letterToCheck){
    //loop thorough phrase
    let checkForMatch = 0;
    //check letterToCheck vs this.phrase[i]
    //if no match
    for(let i = 0; i < this.phrase.length; i++){
      if(letterToCheck.toLowerCase() === this.phrase[i].toLowerCase()){
        checkForMatch++
      }
    }
    if(checkForMatch > 0){
      return true;
    } else{
      return false;
    }
  }

  /*
  *
  * Method will show matched letter by adding show class
  */
  showMatchedLetter(letter){
    const lis = document.getElementById('phrase').firstElementChild.children;
    for(let i = 0; i < lis.length; i++){
      if(lis[i].textContent === letter){
        lis[i].classList.add('show');
        lis[i].classList.remove('hide');
      }
    }
  }
}
