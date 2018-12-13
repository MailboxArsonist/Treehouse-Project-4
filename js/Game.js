class Game {
  constructor(){
    this.missed = 5;
    this.phrases = ['donkey kong',
                     'pac man',
                     'frogger',
                     'mario',
                     'tetris',
                     'gauntlet',
                     'zelda',
                     'pong',
                     'sonic',
                     'rayman'];
    this.currentPhrase = null;
    this.gameWon = 0;
  }

  /*
  * Method will randomly retrieve a phrase from the phrases array and return
  */
  getRandomPhrase(){
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  /*
  *@param {string}
  * Method will handle interaction on the keyboard, call checkletter in phrase
  * If not call the removeLife method, add class of wrong to button and disable
  * If yes call the checkForWin method and showMatchedLetter.add class of chosen to button and disable
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
  * This method will remove a life and end game if no more lives.
  */
  removeLife(){
    this.missed--;
    document.getElementsByTagName('img')[this.missed].src = 'images/8-bit-lost.png';
    if(this.missed === 0){
      this.gameOver('lose', 'Nooo... YOU LOSE');
    }
  }

  /*
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
      this.gameOver('win', 'Woohoo! You Win!');
    } else{
      this.gameWon = 0;
    }
  }
  /*
  *@param {string, string}
  * Method will set overlay display, add message to screen and change button text
  */
  gameOver(result, message){
    document.getElementById('overlay').className = result;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('result-message').textContent = message;
    document.getElementById('btn__reset').textContent = 'Play Again?';
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
  * Method will start the game, call get random display and add phrase to display from Phrase class.
  */
  startGame(){
    this.reset();
    this.currentPhrase = new Phrase(this.getRandomPhrase());
    this.currentPhrase.addPhraseToDisplay();
  }
}
