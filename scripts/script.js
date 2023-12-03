function showResult(score, numberOfQuestions) {
  let scoreDisplay = `${score} / ${numberOfQuestions}`;
  scoreAreaSpanElement.innerHTML = scoreDisplay;
}

function launchGame() {
  let score = 0;
  let proposedWordsNumber = 0;
  let i = 0;

  let proposedWord = wordsList[i];
  function displayProposition(proposedWord) {
    propositionAreaElement.innerHTML = proposedWord;
    return proposedWord;
  }

  displayProposition(proposedWord);

  validateWordBtnElement.addEventListener('click', () => {
    // console.log(wordsList[i]);

    i++;

    proposedWord = displayProposition(wordsList[i]);

    console.log(userTextInpuElement.value);
  });

  showResult(score, proposedWordsNumber);
}
