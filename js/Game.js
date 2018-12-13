class Game {
  constructor(phrases){
    this.missed = 5;
    this.phrases = phrases;
    this.currentPhrase = null;
    this.gameWon = 0;
  }
  /*
  *
  * Method will randomly retrieve a phrase from the phrases array.
  */
  getRandomPhrase(){
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  /*
  *
  * Method will handle interaction on the keyboard, call checkletter in phrase
  * If not call the removeLife method
  * If yes call the checkForWin method and showMatchedLetter
  */
  handleInteraction(letter){
    const keys = document.querySelectorAll('.key');
    if(this.currentPhrase.checkLetter(letter)){
      //loop and add class
      for(let i = 0; i < keys.length; i++){
        if(letter === keys[i].textContent){
          keys[i].disabled = true;
          keys[i].classList.add('chosen');
        }
      }
      this.currentPhrase.showMatchedLetter(letter);
      this.checkForWin();
    } else{
      for(let i = 0; i < keys.length; i++){
        if(letter === keys[i].textContent){
          keys[i].disabled = true;
          keys[i].classList.add('wrong');
        }
      }
      this.removeLife();
    }
  }
  /*
  *
  * This method will remove a life and end game if no more lives.
  */
  removeLife(){
    this.missed--;
    document.getElementsByTagName('img')[this.missed].src = 'images/8-bit-lost.png';
    if(this.missed === 0){
      document.getElementById('overlay').className = 'lose';
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('result-message').textContent = 'Nooo... YOU LOSE';
      document.getElementById('btn__reset').textContent = 'Play Again?';
    }
  }
  /*
  *
  * Method will Check if all letters are matched --- Check if all letter classes are show
  */
  checkForWin(){
    //loop through all li's, check txt content & class
    const lis = document.getElementById('phrase').firstElementChild.children;
    for(let i = 0; i < lis.length; i++){
      if(lis[i].textContent === ' ' || lis[i].className === 'letter show'){
        this.gameWon++;
      }
    }
    if(this.gameWon === this.currentPhrase.phrase.length){
      document.getElementById('overlay').className = 'win';
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('result-message').textContent = 'Woohoo! You Win!';
      document.getElementById('btn__reset').textContent = 'Play Again?';
    } else{
      this.gameWon = 0;
    }
  }
  /*
  *
  * Method will reset keyboard and lives, also remove all li's
  */
  reset(){
    const keys = document.querySelectorAll('.key');
    for(let i = 0; i < keys.length; i++){
      keys[i].disabled = false;
      keys[i].classList.remove('chosen', 'wrong');
    }
    const lives = document.querySelectorAll('img');
    for(let i = 0; i < lives.length; i++){
      lives[i].src = 'images/8-bit.png';
    }
    const ul = document.querySelector('#phrase').firstElementChild;
    while(ul.lastChild){
      ul.removeChild(ul.lastChild);
    }

  }
  /*
  *
  * Method will start the game, call get random display and add phrase to display from Phrase class.
  */
  startGame(){
    this.reset();
    this.currentPhrase = new Phrase(this.getRandomPhrase());
    this.currentPhrase.addPhraseToDisplay();
  }
}
