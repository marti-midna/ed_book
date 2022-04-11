// Lezione del 22/03/2021
// Esercizio
// Sulla base della lezione odierna:

// Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt e che faccia il console.log della somma soltanto dopo 10 secondi. // ATTENZIONE: Questa funzione non 'renderizza' alcunchè all'interno della pagina HTML, eccetto il prompt che chiede i numeri all'utente. Scegliete saggiamente tra setInterval e setTimeout!
// La presenza di un bottone però potrebbe annullare quel intervallo!

// Completate l'esercitazione di ieri, per chi l'avesse fatto, passate pure all'avanzato!
// Avanzato:
// Riprendendo l'esercizio lasciato Venerdì scorso, provate a sostituire l'array di elementi con una chiamata fetch. Utilizzate le API presenti a questo indirizzo: https://swapi.dev/
// (Tips. leggete la documentazione!)



//chiedo all'utente due valori numeri da sommare
const firstNum = parseInt(prompt('Digita qui il primo numero da sommare'));
const secondNum = parseInt(prompt('Digita qui il secondo numero da sommare'));

//creo la variabile somma in cui sommo i due dati del prompt, non hai bisogno di altro considerando che devi fare una somma e basta - non ti serve nessuno if o switch per scegliere il tipo di operazione
let Sum = firstNum + secondNum;

//creo la costante che mi stamperà in console.log la somma
const stampSum = () => console.log('questa è la somma dei prompt ' + Sum);

//richiamo la funzione con il setTimeout + il parametro in millisecondi per evocarla
// setTimeout(stampSum, 10000);




//VARIANTE CON BOTTONE E SETINTERVAL
// setInterval(stampSum, 10000);

//posso però spezzare il ciclo di setInterval con un bottone - per farlo devo scoprire l'index di riferimento del mio setInterval rinchiudendolo in una costante quindi il setInterval diverrà una variabile
const indexCicle = setInterval(stampSum, 10000);
//scopro l'index facendo il console.log di questa costante
console.log('questo è l\'index che ti serve per fermare il ciclo: ' + indexCicle);
//creo in button in html e scrivo la costante con il querySelector per segnalare il tag da prendere in considerazione
const btnStop = document.querySelector('button');
//utilizzo clearInterval(index) per stoppare il ciclo in corso
btnStop.addEventListener('click', () => {
    clearInterval(1);
});


//*
//---------------------------------------- esercizio con funzione
//
// let firstNum = parseInt(prompt('Digita qui il primo numero da sommare'));


// let secondNum = parseInt(prompt('Digita qui il secondo numero da sommare'));


// function sum() {

//     let result = firstNum + secondNum;

//     return result;

// }

// sum();

// const TimeOut = setTimeout(() => console.log(sum()), 10000);







