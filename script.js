const applicationWord = 'Bonjour';

let userWord = prompt('Entrez le mot : ' + applicationWord);

if (userWord === applicationWord) {
  console.log('Bravo !');
} else {
  console.log('Vous avez fait une erreur de frappe.');
}
