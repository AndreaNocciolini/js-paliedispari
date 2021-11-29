const container = document.querySelector(`.container`);
const choiceShow = document.querySelector(`.choice`);
const playerNumberShow = document.querySelector(`.player-number`);
const pcNumberShow = document.querySelector(`.pc-number`);
const sumShow = document.querySelector(`.sum`);
const result = document.querySelector(`.result`);

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

function getRndInteger(min, max) {
    let numberRand = Math.floor(Math.random() * (max - min + 1)) + min;
    return numberRand //restituisco valore calcolato
}

const odd = `odd`;
const even = `even`;
let choice;
do {
    choice = prompt("What'll it be, odd or even?");
} while (choice.toLowerCase() !== odd.toLowerCase() && choice.toLocaleLowerCase() !== even.toLowerCase()); 

let userNumber;
do {
   userNumber = parseInt(prompt("Choose a number between 1 and 5."));
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5); 
console.log(userNumber);

let pcNumber = getRndInteger(1, 6);
console.log(pcNumber);

const sum = userNumber + pcNumber;
console.log(sum);

let sumOdd;
let sumEven;
if (sum % 2 == 0) {
    sumOdd = true;
    sumEven = false;
}
else {
    sumOdd = false;
    sumEven = true;
}


let winOdd;
let winEven;
if (choice.toLowerCase() == odd.toLowerCase()) {
    winOdd = true;
    winEven = false;
}
else {
    winOdd = false;
    winEven = true;
}

if (winOdd !== sumOdd) {
    result.innerHTML = `You Win!!`;
} else if (winEven !== sumEven){
    result.innerHTML = `You Win!!`;
} else {
    result.innerHTML = `You Lose...`;
}

choiceShow.innerHTML = `Your choice: ${choice}`;
playerNumberShow.innerHTML = `You choose: ${userNumber}`;
sumShow.innerHTML = `Result: ${sum}`;
pcNumberShow.innerHTML = `PC choose: ${pcNumber}`;
