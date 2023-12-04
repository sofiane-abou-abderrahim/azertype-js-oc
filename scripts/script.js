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

function validateName(name) {
  if (name.length < 2) {
    throw new Error(`Le nom ${name} est trop court`);
  }
}

function validateEmail(email) {
  let validEmail = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
  if (!validEmail.test(email)) {
    throw new Error(`L’e-mail ${email} n’est pas valide`);
  }
}

function manageForm(emailScore) {
  let popupName = popupFormNameElement.value;
  let popupEmail = popupFormEmailElement.value;

  if (validateName(popupName) && validateEmail(popupEmail)) {
    displayEmail(popupName, popupEmail, emailScore);
  } else {
    console.log('Erreur');
  }
}

function launchGame() {
  initAddEventListenerPopup();
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
      displayProposition(propositionList[i]);
    });
  }

  popupFormElement.addEventListener('submit', event => {
    event.preventDefault();
    let emailScore = `${score} / ${i}`;
    manageForm(emailScore);
  });

  showResult(score, i);
}
