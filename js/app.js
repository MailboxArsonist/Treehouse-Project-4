/*
-----------Treehouse-Project-4--------------
*/


//Declare Global Variables. Game will contain game object, keycodes will be an array or keys pressed
let game;
let keyCodes = [];

//set up a function which will remove overlay
const resetDisplay = () => {
  document.getElementById('overlay').style.display = 'none';
};

// Mark button function will be called when  key is selected, it will call the handleInteraction method and pass in a single letter as an argument
const markButton = (evt) => {
  game.handleInteraction(evt);
};

//Set up event handler on start button, will call 'resetDisplay' and will create a new Game object.
document.getElementById('btn__reset').addEventListener('click', () => {
  resetDisplay();
  game = new Game(phrases);
  game.startGame();
});

//set up listener on keydown. Keys inbetween 65&90 are letters, if keyCode array includes the letter then it means has already been pressed/clicked
window.addEventListener('keydown', (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90){
    if(!keyCodes.includes(event.key)){
      markButton(event.key);
      keyCodes.push(event.key);
    }
  }
});

//Set up event listener on each button, call 'markButton' to disable that letter and handle interaction in game object, push the letter into keycode array.
const buttons = document.getElementById('qwerty');
buttons.addEventListener('click', (event) => {
  if(event.target.className === 'key'){
    markButton(event.target.textContent);
    keyCodes.push(event.target.textContent);
  }
});
