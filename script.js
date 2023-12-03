// Declaration of arrays containing lists of words suggested to the user
const words = ['Cachalot', 'Pétunia', 'Serviette'];
const phrases = [
  'Pas de panique !',
  'La vie est belle',
  'Merci pour le cadeau'
];

let score = 0;

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

if (userChoice === 'mots') {
  // We traverse the array of words
  for (let i = 0; i < words.length; i++) {
    // We ask the user to enter the word corresponding to index i
    let userWord = prompt('Entrez le mot : ' + words[i]);
    if (userWord === words[i]) {
      // If the word entered by the user is correct, we increment the score
      score++;
    }
  }
  console.log('Votre score est de ' + score + ' sur ' + words.length);
} else {
  // We traverse the array of phrases
  for (let i = 0; i < phrases.length; i++) {
    // We ask the user to enter the phrase corresponding to index i
    let userPhrase = prompt('Entrez la phrase : ' + phrases[i]);
    if (userPhrase === phrases[i]) {
      // If the phrase entered by the user is correct, we increment the score
      score++;
    }
  }
  console.log('Votre score est de ' + score + ' sur ' + phrases.length);
}

// Note: This is not the only valid solution for this exercise; there are other more optimized ones,
// but we will explore those in the upcoming chapters.
