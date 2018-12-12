class Game {
  constructor(){
    this.missed = 0;
    this.phrases = ['win', 'lake', 'style'];
  }
  /*
  *
  * Method will randomly retrieve a phrase from the phrases array.
  */
  getRandomPhrase(){
    console.log('getRandomPhrase has fired');
    const num = Math.floor(Math.random() * this.phrases.length);
    console.log(num);
    console.log(this.phrases[num]);
  }
  /*
  *
  * Method will handle interaction on the keyboard, call checkletter in phrase
  * If not call the removeLife method
  * If yes call the checkForWin method and showMatchedLetter
  */
  handleInteraction(){
    console.log('handleInteraction has fired');
  }
  /*
  *
  * This method will remove a life and end game if no more lives.
  */
  removeLife(){
    console.log('removeLife has fired');
  }
  /*
  *
  * Method will Check if all letters are matched and
  */
  checkForWin(){
    console.log('checkForWin has fired');
  }
  /*
  *
  * Method will start the game, call get random display and add phrase to display from Phrase class.
  */
  startGame(){
    console.log('startGame has fired');
    this.getRandomPhrase();
  }
}
