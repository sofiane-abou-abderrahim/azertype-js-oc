function showResult(score, numberOfQuestions) {
  console.log(
    'Votre score final est de ' + score + ' sur ' + numberOfQuestions
  );
}

function choseWordsOrPhrases() {
  // Declaration of the variable containing the user's choice
  let userChoice = prompt(
    "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
  );

  // While the user has not entered "mots" or "phrases," they are prompted to enter a userChoice again
  while (userChoice !== 'mots' && userChoice !== 'phrases') {
    userChoice = prompt(
      "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
    );
  }
  return userChoice;
}

function launchGameLoop(propositionsList) {
  let score = 0;
  // We traverse the array of words
  for (let i = 0; i < propositionsList.length; i++) {
    // We ask the user to enter the word corresponding to index i
    let userWord = prompt('Entrez le mot : ' + propositionsList[i]);
    if (userWord === propositionsList[i]) {
      // If the word entered by the user is correct, we increment the score
      score++;
    }
  }
  return score;
}

function launchGame() {
  let userChoice = choseWordsOrPhrases();

  let score = 0;
  let proposedWordsNumber = 0;
  if (userChoice === 'mots') {
    score = launchGameLoop(wordsList);
    proposedWordsNumber = wordsList.length;
  } else {
    score = launchGameLoop(phrasesList);
    proposedWordsNumber = phrasesList.length;
  }
  showResult(score, proposedWordsNumber);
}
