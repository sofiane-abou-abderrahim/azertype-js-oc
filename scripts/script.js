function showResult(score, numberOfQuestions) {
  let scoreDisplay = `${score} / ${numberOfQuestions}`;
  scoreAreaSpanElement.innerHTML = scoreDisplay;
}

function launchGame() {
  let score = 0;
  let proposedWordsNumber = 0;

  validateWordBtnElement.addEventListener('click', () => {
    console.log(userTextInpuElement.value);
  });

  showResult(score, proposedWordsNumber);
}
