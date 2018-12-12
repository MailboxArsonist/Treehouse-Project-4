//set up a function which will remove overlay
const resetDisplay = () => {
  document.getElementById('overlay').style.display = 'none';
};

// Mark button function will be called when  key is selected, it will disable that button from being clicked again.
const markButton = (evt) => {
  evt.disabled = true;
  // evt.classList.add('wrong');
};

//Set up event handler on start button, will call 'resetDisplay' and will create a new Game object.
document.getElementById('btn__reset').addEventListener('click', () => {
  resetDisplay();
  const game = new Game();
  const phrase = new Phrase('hello');
  phrase.addPhraseToDisplay();
  game.getRandomPhrase();
});

//Set up event listener on each button, call 'markButton' to disable that letter
const buttons = document.getElementById('qwerty');
buttons.addEventListener('click', (event) => {
  if(event.target.className === 'key'){
    console.log(event.target.textContent);
    markButton(event.target);
  }
});
