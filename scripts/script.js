function showResult(score, numberOfQuestions) {
  let scoreDisplay = `${score} / ${numberOfQuestions}`;
  scoreAreaSpanElement.innerHTML = scoreDisplay;
}

function displayProposition(proposition) {
  propositionAreaElement.innerHTML = proposition;
}

function launchGame() {
  let score = 0;
  let proposedWordsNumber = 0;
  let i = 0;

  displayProposition(wordsList[i]);

  validateWordBtnElement.addEventListener('click', () => {
    console.log(userTextInpuElement.value);

    i++;

    if (wordsList[i] === undefined) {
      displayProposition('Le jeu est fini');
      validateWordBtnElement.disabled = true;
    } else {
      displayProposition(wordsList[i]);
    }
  });

  showResult(score, proposedWordsNumber);
}
