function showResult(score, numberOfQuestions) {
  let scoreDisplay = `${score} / ${numberOfQuestions}`;
  scoreAreaSpanElement.innerHTML = scoreDisplay;
}

function displayProposition(proposition) {
  propositionAreaElement.innerHTML = proposition;
}

function launchGame() {
  let score = 0;
  let i = 0;

  displayProposition(wordsList[i]);

  validateWordBtnElement.addEventListener('click', () => {
    console.log(userTextInpuElement.value);
    if (userTextInpuElement.value === wordsList[i]) {
      score++;
    }
    i++;
    showResult(score, i);
    userTextInpuElement.value = '';
    if (wordsList[i] === undefined) {
      displayProposition('Le jeu est fini');
      validateWordBtnElement.disabled = true;
    } else {
      displayProposition(wordsList[i]);
    }
  });

  for (let j = 0; j < radioBtnList.length; j++) {
    radioBtnList[j].addEventListener('change', () => {
      console.log(radioBtnList[j]);
    });
  }

  showResult(score, i);
}
