
//Create class called Phrase
//add constructor, that accepts phrase as an argument
class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

  /*
  *
  * Method will add a random phrase to the display. Will create an li for each letter and append to ul on page.
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
  *@param {string}
  * Method check the letter vs phrase[i], return true/false if includes
  */
  checkLetter(letterToCheck){
    //loop thorough phrase
    let checkForMatch = 0;
    //check letterToCheck vs this.phrase[i]
    //if no match
    for(let i = 0; i < this.phrase.length; i++){
      if(letterToCheck === this.phrase[i].toLowerCase()){
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
  *@param {string}
  * Method will show matched letter by adding show class and remove hide class
  */
  showMatchedLetter(letter){
    const lis = document.getElementById('phrase').firstElementChild.children;
    for(let i = 0; i < lis.length; i++){
      if(lis[i].textContent.toLowerCase() === letter){
        lis[i].classList.add('show');
        lis[i].classList.remove('hide');
      }
    }
  }
}
