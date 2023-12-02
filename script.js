const listOfWords = ['Cachalot', 'Pétunia', 'Serviette'];
let score = 0;
let userWord = prompt('Entrez le mot : ' + listOfWords[0]);

for (let i = 0; i < listOfWords.length; i++) {
  while (userWord !== listOfWords[i]) {
    userWord = prompt('Entrez le mot : ' + listOfWords[i]);
  }
  score++;
  console.log('Bravo ! Votre score est de: ' + score);
}

console.log('SCORE FINAL : ' + score + '/3');
