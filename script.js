const listOfWords = ['Cachalot', 'Pétunia', 'Serviette'];
let score = 0;

let userWord = prompt('Entrez le mot : ' + listOfWords[0]);

if (userWord === listOfWords[0]) {
  score++;
  console.log('Bravo ! Votre score est de: ' + score);
} else {
  console.log('Erreur ! Votre score est toujours de: ' + score);
}

userWord2 = prompt('Entrez le mot : ' + listOfWords[1]);

if (userWord2 === listOfWords[1]) {
  score++;
  console.log('Bravo ! Votre score est de: ' + score);
} else {
  console.log('Erreur ! Votre score est toujours de: ' + score);
}

userWord3 = prompt('Entrez le mot : ' + listOfWords[2]);

if (userWord3 === listOfWords[2]) {
  score++;
  console.log('Bravo ! Votre score est de: ' + score);
} else {
  console.log('Erreur ! Votre score est toujours de: ' + score);
}

console.log('VOTRE SCORE FINAL : ' + score + '/3');
