//CONSEGNA 9 MARZO 2022
// Scrivere un programma che dato array di numeri, calcoli la media dei valori e
// restituisca in output la media.

// Infine accodare il risultato della media all'array stesso, come ultimo elemento.

// Esempio:
// Input: a = [3, 5, 10, 2, 8]

// Output:

// - media = 5.6
// - array: [3, 5, 10, 2, 8, 5.6]

// ### Avanzato

// Scrivere lo stesso identico programma di prima, ma i numeri devono essere inseriti dall'utente.
// Facciamo che i numeri richiesti siano almeno 4


// //scrivo la mia array
// let myArr = [3, 5, 10, 2, 8];
// // //risolvo con un ciclo for per processare il mio array
// let result = 0; //do 0 perchè è un valore che non conosco

// for (let index = 0; index < myArr.length; index++) {
//     result += myArr[index];
//     console.log(result)
// }
// let media = result / myArr.length;
// console.log(media)

// myArr.push(media)
// console.log(myArr)

// alert('il mio risultato è ' + myArr)

//AVANZATO

let myArr = [];
let result = 0;

for (let index = 0; index < 4; index++) {
    myArr.push(parseInt(prompt('Digita un numero per quattro volte')));

    result += myArr[index];
}
let media = result / myArr.length;

alert(media);

alert('la mia arrey è ' + myArr);







///////////////////////CICLO FOR OF


// let arrMy = [3, 2, 10, 55, 23];

// let result = 0;

// //prende ogni item della mia arrey
// for (item of arrMy) {
//     result += item;

// }

// console.log("risultato della somma", result);
// // trovo la media
// //somma degli items diviso numero items arrey
// console.log("quantita di items", arrMy.length);

// let tot = result / arrMy.length;
// console.log("media", tot);


//ESERCIZI
//inseriamo una parola tramite prompt

let mypar = 'Radar';
console.log(mypar);
//la scomponiamo e la inseriamo dentro una arrey

let par_split = mypar.split('');
console.log(par_split);

//la capovolgiamo l'arrey 
let par_reverse = par_split.reverse('');
console.log(par_reverse);

//e ricomponiamo la parola
let par_unit = par_reverse.join(' + ');
console.log(par_unit);










