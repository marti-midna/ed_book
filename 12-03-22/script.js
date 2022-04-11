// DA NUMBER O BOOLEANO A STRINGA
//la tua variabile                      nuova variabile = vecchiavariabile.toString();          verifica on console
// let myNum = 5;                          let newnum = myNum.toString();                          console.log(newnum);

// let myString = 'questa è una stringa';  let newSt = myString.toString();                        console.log(newSt);

// let num = 2;                            let newn = num.toString();                              console.log(newn);

// let isYou = true;                       let you = isYou.toString();                             console.log(you);

// //DA STRINGA A NUMERO PARSEINT E PARSEFLOAT
// // ''                                   
// //let s = '5';              
// let s = parseInt('5');                                                                        
// //let f = '0.4'; 
// let f = parseFloat('0.4');                                                                      console.log(f);
// //DA STRINGA A NUMERO CON IL + DA USARE SOLO SE LA PRIMA CIFRA E' UN NUMERO ALTRIMENTI DA NaN
// let a = +'6';                                                                                   console.log(a);
// let b = +'gradi6';                                                                              console.log(b);

// //DA QUALSIASI DATO A BOOLEAN !! true/false
// let c = !!2;                                                                                    console.log(c);
// let d = !!'ciao';                                                                               console.log(d);
// let e = !!undefined;                                                                            console.log(e);
// let fa = !!'2';                                                                                 console.log(fa);
// let fe = !!0;                                                                                   console.log(fe);
// let fo = !!-2;                                                                                  console.log(fo);
// //con array e oggetti
// let fi = !![];                                                                                  console.log(fi);
// let fu = !!{};                                                                                  console.log(fu);

//---------------------------------------------------------------------------------------------------------------
// IF / SWITCH - STRUTTURE DI CONTROLLO 
// creare una calcolatrice che:

// - prenda come input due valori numerici dall'utente
// - prenda come riferimento il tipo di operazione da svolgere
// - ritorni un alert con il risultato dell'operazione scelta
// - adoperare almeno i 4 tipi di operazioni matematiche comuni: addizione, sottrazione, ...

// ### Avanzato:

// - aggiungere anche l'operazione modulo
// - scrivere lo stesso codice utilizzando sia l'istruzione condizionale IF/ELSE che SWITCH

// //creo i miei prompt per immagazzinare i dati
// let firstN = parseInt(prompt('Ciao, questa è una calcolatrice! Digita qui il primo numero'));
// let userOperation = prompt('Digita qui il tipo di operazione tra + - / * %');
// let secondN = parseInt(prompt('Digita qui il secondo numero'));


// // // uso IF per processare i dati
// // if      (userOperation === '+') {
// //     risultato = firstN + secondN;
// // }
// // else if (userOperation === '-') {
// //     risultato = firstN - secondN
// // }
// // else if (userOperation === '*') {
// //     risultato = firstN * secondN
// // }
// // else if (userOperation === '/') {
// //     risultato = firstN / secondN
// // }
// // else if (userOperation === '%') {
// //     risultato = firstN % secondN
// // }


// // // dichiara la variabile risultato con un alert
// // alert('Il tuo risultato è '+ risultato);


// // uso switch per processare i dati e blocca l'operazione scelta col break
// switch (userOperation) {
//     case '+' :
//         risultato = firstN + secondN;
//         break;

//     case '-' : 
//         risultato = firstN - secondN;
//         break;

//     case '*' : 
//         risultato = firstN * secondN;
//         break;

//     case '/' :
//         risultato = firstN / secondN;
//         break;
    
//     case '%' :
//         risultato = firstN % secondN;
//         break;

//     default :
//         alert('operazione non valida, riprova');
// }

// alert('Il tuo risultato è ' + risultato);

// OPERATORE TERNARIO
// function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;

// // Chiedo l'età con un prompt
// let askAge = parseInt(prompt('Quanti anni hai?'));

// // nuova variabile risultate SE ho più o 18 anni avrò ? come messaggio "Posso bere" :
// let message = (askAge >= 18) ? 'Puoi bere!':
//             (askAge < 18) ? 'Vattene, non puoi bere':
//             "età inusuale" ;

// alert( message );

//---------------------------------------------------------------------------------------------------------------------

//CONSEGNA 9 MARZO 2022
// Scrivere un programma che dato un array di numeri, calcoli la media dei valori e
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

// let myArrey = [2, 4, 10, 5, 2];

// let resu = 0; //dichiaro la variabile che  mi servirà per la somma = 0 per inizializzarla
// //devo sommare pian piano tutti gli elementi dentro arrey quindi creo un ciclo for che ha
// // let posizione di partenza, posizione finale che sarà inferiore al numero degli index(ciclerà 4 volte), incremento di uno
// for (let index = 0; index < myArrey.length; index++) {
//     resu += myArrey[index];
//     console.log('La somma del tuo arrey ' + resu);
// }

// // la media di qualcosa si ha dalla somma di tutti gli index diviso il numero degli index

// media = resu / myArrey.length;
// console.log('La media del tuo arrey è ' + media);
 
// //aggiungo il valore della media al mio arrey con un metodo
// myArrey.push(media);
// console.log(myArrey);

// AVANZATO
//devo chiedere 4 numeri al mio utente che devono essere sommati tra loro in automatico quindi creo un ciclo for che risolva tutto per me
//dichiamo il mio arrey e la mia futura somma

let myArrey = [];
let result = 0;

//chiedo al mio utente i numeri dentro il ciclo in modo che la modale spunti in automatico 4 volte e sommo tutti gli index ricevuti in input, metterò index < 4 in quanto voglio 4 index e il for ciclerà 3 volte per sommare tutto
for (let index = 0; index < 4; index++) {  
    myArrey.push(parseInt(prompt('Digita quattro volte un numero')));
    
    result += myArrey[index];
    
    console.log(myArrey);
    console.log(result);
}
//dichiaro la variabile media che si ottiene dividendo somma / numero degli index totali
let media = result / myArrey.length;
console.log(media);
alert('La media del tuo arrey è ' + media);