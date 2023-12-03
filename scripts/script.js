function showResult(score, numberOfQuestions) {
  let scoreDisplay = `${score} / ${numberOfQuestions}`;
  scoreAreaSpanElement.innerHTML = scoreDisplay;
}

function launchGame() {
  let score = 0;
  let proposedWordsNumber = 0;
  let i = 0;

  validateWordBtnElement.addEventListener('click', () => {
    console.log(wordsList[i]);
    i++;

    console.log(userTextInpuElement.value);
  });

  showResult(score, proposedWordsNumber);
}
