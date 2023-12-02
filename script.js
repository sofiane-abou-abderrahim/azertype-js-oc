const listOfWords = ['Cachalot', 'Pétunia', 'Serviette'];
let score = 0;

let userWord = prompt('Entrez le mot : ' + listOfWords[0]);

if (userWord === listOfWords[0]) {
  console.log('Bravo !');
} else {
  console.log('Vous avez fait une erreur de frappe.');
}

// switch (userWord) {
//   case applicationWord:
//     console.log('Bravo !');
//     break;
//   case 'Gredin':
//     console.log('Restez correct !');
//     break;
//   case 'Mécréant':
//     console.log('Restez correct !');
//     break;
//   case 'Vilain':
//     console.log('Soyez gentil !');
//     break;
//   default:
//     console.log('Vous avez fait une erreur de frappe.');
// }
