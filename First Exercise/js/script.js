const container = document.querySelector(`.container`);

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

const userWord = prompt(`Type something in here: `).replaceAll(" ","");
console.log(userWord);

const word = userWord.toLowerCase();
console.log(word);

const wordReverse = userWord.split("").reverse().join("").toLowerCase();
console.log(wordReverse);

if (word === wordReverse) {
    container.innerHTML = `This is a palindrome!`
}
else {
    container.innerHTML = `This is not a palindrome...`
}



