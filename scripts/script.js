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
  let propositionList = wordsList;

  displayProposition(propositionList[i]);

  validateWordBtnElement.addEventListener('click', () => {
    console.log(userTextInpuElement.value);
    if (userTextInpuElement.value === propositionList[i]) {
      score++;
    }
    i++;
    showResult(score, i);
    userTextInpuElement.value = '';
    if (propositionList[i] === undefined) {
      displayProposition('Le jeu est fini');
      validateWordBtnElement.disabled = true;
    } else {
      displayProposition(propositionList[i]);
    }
  });

  for (let j = 0; j < radioBtnList.length; j++) {
    radioBtnList[j].addEventListener('change', event => {
      console.log(event.target.value);
      if (event.target.value === '1') {
        propositionList = wordsList;
      } else {
        propositionList = phrasesList;
      }
    });
  }

  showResult(score, i);
}
