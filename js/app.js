let game;

//set up a function which will remove overlay
const resetDisplay = () => {
  document.getElementById('overlay').style.display = 'none';
};

// Mark button function will be called when  key is selected, it will disable that button from being clicked again.
const markButton = (evt) => {
  evt.disabled = true;
  game.handleInteraction(evt);
};

//Set up event handler on start button, will call 'resetDisplay' and will create a new Game object.
document.getElementById('btn__reset').addEventListener('click', () => {
  resetDisplay();
  game = new Game(phrases);
  game.startGame();
});

//Set up event listener on each button, call 'markButton' to disable that letter
const buttons = document.getElementById('qwerty');
buttons.addEventListener('click', (event) => {
  if(event.target.className === 'key'){
    markButton(event.target);
  }
});
