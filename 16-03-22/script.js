// //mi stampa tutti gli elementi
// // const items = document.querySelectorAll('ul li');

// // console.log(items);

// // const items = document.querySelector('ul li');

// // console.log(items);

// //  ATTENZIONE PERO' QUESTA NON E' UN array ANCHE SE LO SEMBRA, e' una NODELIST cioè una raccolta di elementi readonly anche se ha dei metodi
// const items = document.querySelectorAll('ul li');

// //forEach è una versione più veloce del ciclo for che sarebbe
// // for (let i = 0; i < items.length; i++) {
// //     ...
// // };

// //forEach parte da zero, cicla per tutta la lunghezza della mia variabile e incrementa di uno
// // items.forEach(() => {
// //     console.log("ciclo array (nodelist)");
// // });

// // Questo sopra è  lo stesso di scrivere:
// const cb = (element, index) => {
//     console.log("ciclo array (nodelist)", element, index);
// };

// items.forEach(cb);


// // ` option+9

// console.log(items);


// # Lezione del 16/03/2021

// ### Esercizio

// 1. Dato un array di citazioni, tramite un pulsante verrà visualizzata una citazione casuale per volta
// ```javascript
// const quotes = [
//   "Io sono tuo padre!",
//   "guerra nessuno fatto grande",
//   "fare o non fare... non c'è provare",
//   "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
//   "Sto più in alto di te!",
//   ".... (cit. Darth Maul)",
//   "Eri come un fratello per me! (pianto)",
// ];
// ```



//ESERCIZIO 1 

const quotes = [
    "Io sono tuo padre!",
    "guerra nessuno fatto grande",
    "fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",
];

console.log(quotes);

//faccio una costante che porti il querySelector al punto in cui devo inserire la mia citazione

//ascolto un evento che si scatena al click del mio button
document.querySelector('button#cit').addEventListener('click', () => {

    //dichiaro una costante randomica = random * lunghezza del mio array
    const random = Math.floor(Math.random() * (quotes.length));

    document.getElementById('dinamica').innerHTML = quotes[random];

});
//-------------------------------------------------------------------------------------------------------------

//ESERCIZIO2 NO


// 2. Migliorare la "sezione commenti" vista oggi insieme, aggiungendo oltre al testo del commento:

// - il nome dell'utente
// - l'email
// - una foto profilo (un URL: https://randomuser.me/photos)


//dichiaro la costante che mi permette di arrivare con il querySelector all input
// const input = document.querySelector('#input');

// //dichiaro la costante dell'invio
// const submit = document.querySelector('#submit');

// //dichiaro la costante commenti
// const commentsList = document.querySelector('#comments');

// //dichiaro un array di commenti vuoto - non ci sono ancora commenti

// const comments = [];

// //creo il mio arrey di pic randomiche

// function randomImage() {
// const randomPic = newArrey();

// randomPic[0] = "https://randomuser.me/api/portraits/lego/4.jpg";
// randomPic[1] = "https://randomuser.me/api/portraits/lego/2.jpg";
// randomPic[2] = "https://randomuser.me/api/portraits/lego/6.jpg";
// randomPic[3] = "https://randomuser.me/api/portraits/lego/7.jpg";
// randomPic[4] = "https://randomuser.me/api/portraits/lego/0.jpg";
// randomPic[5] = "https://randomuser.me/api/portraits/lego/3.jpg";

// };
// //inserisco nel array vuoto il primo commento
// //prima mappa ciò che hai... ovvero const comments .map crea un nuovo array copiando il primo di partenza che è vuoto.. ritornando qualcosa di nuovo
// //joina tutto quello che c'è del tuo array e avrai una stringa

// const renderComments = () => {
//     commentsList.innerHTML = comments.map((comment) => 
//         `<li>
//         <p>${foto}</p>
//         <h6>${user}</h6>
//         <h7>${mail}</h7>
//         <p>${comment}</p>
//         </li>
//         `
//         )
//         .join('');
// };

// //all'invio aggiungo un ascoltatore di evento al click
// submit.addEventListener('click', () => {
//     //immetto al mio array il mio commento
//     comments.push(input.value);
//     input.value = "";
//     renderComments();

// });

//-------------------------------------------------------------------------------------------------------------

//ESERCIZIO2 NON COMPLETO


// 2. Migliorare la "sezione commenti" vista oggi insieme, aggiungendo oltre al testo del commento:

// - il nome dell'utente
// - l'email
// - una foto profilo (un URL: https://randomuser.me/photos)

//scrivo il mio arrey coi commenti
let userComments = [];


//creo una funzione con dentro le mie costanti input inserita dall utente
function test() {

    const user = document.querySelector('#user');

    const mail = document.querySelector('#mail');

    const userComment = document.querySelector('#userComment');


};







