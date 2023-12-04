function showResult(score, numberOfQuestions) {
  let scoreDisplay = `${score} / ${numberOfQuestions}`;
  scoreAreaSpanElement.innerHTML = scoreDisplay;
}

function displayProposition(proposition) {
  propositionAreaElement.innerHTML = proposition;
}

function displayEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score AzerType&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'AzerType !`;
  location.href = mailto;
}

function launchGame() {
  initAddEventListenerPopup();
  let score = 0;
  let i = 0;
  let propositionList = wordsList;
  let subject;
  let message;

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
      displayProposition(propositionList[i]);
    });
  }

  popupFormElement.addEventListener('submit', event => {
    event.preventDefault();

    let emailScore = `${scroe} / ${i}`;

    let popupName = popupFormNameElement.value;
    let popupEmail = popupFormEmailElement.value;

    displayEmail(popupName, popupEmail, emailScore);
  });

  showResult(score, i);
}
