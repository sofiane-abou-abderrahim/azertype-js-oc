const words = ['Cachalot', 'Pétunia', 'Serviette'];
const phrases = [
  'Pas de panique !',
  'La vie est belle',
  'Merci pour le cadeau'
];

let userWord = prompt('mots ou phrases');
let score = 0;

while (userWord !== 'mots' && userWord !== 'phrases') {
  userWord = prompt('mots ou phrases');
}

if (userWord === 'mots') {
  for (let i = 0; i < words.length; i++) {
    while (userWord !== words[i]) {
      userWord = prompt('Entrez le mot : ' + words[i]);
    }
    score++;
    console.log('Bravo ! Votre score est de: ' + score);
  }
} else if (userWord === 'phrases') {
  for (let i = 0; i < phrases.length; i++) {
    while (userWord !== phrases[i]) {
      userWord = prompt('Entrez la phrase : ' + phrases[i]);
    }
    score++;
    console.log('Bravo ! Votre score est de: ' + score);
  }
}

console.log('SCORE FINAL : ' + score + '/3');
