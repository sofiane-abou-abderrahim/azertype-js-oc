/*********************************************************************************
 *
 * Entry point, it is the one that initializes the game and starts the game loop.
 *
 *********************************************************************************/

const userTextInpuElement = document.getElementById('textInput');
const validateWordBtnElement = document.getElementById('validateWordBtn');
const propositionAreaElement = document.querySelector('.propositionArea');
const scoreAreaSpanElement = document.querySelector('.scoreArea span');
const radioBtnList = document.querySelectorAll('.sourceOption input');
const popupFormElement = document.querySelector('.popup form');
const popupFormNameElement = document.querySelector('.popup form #name');
const popupFormEmailElement = document.querySelector('.popup form #email');

const popupInputElements = document.querySelectorAll('.popup input');

launchGame();
