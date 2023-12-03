function showResult(score, numberOfQuestions) {
  let scoreDisplay = `${score} / ${numberOfQuestions}`;
  scoreAreaSpanElement.innerHTML = scoreDisplay;
}

function launchGame() {
  let score = 0;
  let proposedWordsNumber = 0;

  showResult(score, proposedWordsNumber);
}
