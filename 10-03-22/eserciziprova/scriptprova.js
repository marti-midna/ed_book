// ESERCIZIO2 METODO IF SVOLTO
// Scrivere una funzione calcolatrice che svolga tutte e 4 le operazioni matematiche. La funzione dovrà accettare 3 parametri, 2 relativi ai numeri inseriti dall'utente e uno per lasciare scegliere all'utente l'operazione da svolgere.

// creo una funzione calcolatrice per tutte e 4 le operazioni
// scrivo function nomefunzioneatuopiacere e () con dentro i tre parametri

// function complexResult() {  
// }

// creo i prompt dai quali far inserire i numeri e il tipo di operazione dall'utente, i prompt sono delle modali che posso creare dichiarando una variabile let
// RICORDA il prompt ha al suo interno delle stringhe ma se hai bisogno di un valore numerivo devi inserire tutto il prompt dentro un parseInt

// // modale 1
// let firstDate = parseInt(prompt('Ciao! Questa è una calcolatrice! Inserisci il primo numero'));

// //modale 2
// let userOperation = prompt('Seleziona un\'operazione tra + - * e /');

// //modale 3
// let secondDate = parseInt(prompt('Inserisci il secondo numero'));

// function result(firstDate,secondDate,userOperation) {
   
//     //se la mia operazione è somma io faccio una somma
//     if (userOperation === '+') {
//         return firstDate + secondDate;
        
//     }
//     else if (userOperation === '-') {
//         return firstDate - secondDate;
        
//     }
//     else if (userOperation === '*') {
//         return firstDate * secondDate;
        
//     }
//     else if (userOperation === '/') {
//         return firstDate / secondDate;
        
//     }

// }

// let risultato = result(firstDate,secondDate,userOperation);

// // this.result();

// alert('Il risultato è '+ risultato);


//-----------------------------------------------------------
//Avanzato versione 2
// Sulla base dell'esercizio 1,

// scrivere una funzione che permetta di aggiungere nuovi contatti (oggetti) all'array che li ospita.
// cancelli un contatto passando come parametro l'indice dell'array

//data la mia arrey con dentro gli oggetti

let listAddress = [
    {   nome : 'Marti',
        cognome: 'Rossi',
        numeroditelefono: 3270693052,
    },

    {   nome : 'Giacomina',
        cognome: 'Rossi',
        numeroditelefono: 3270693053,
    },

    {   nome : 'Salem',
        cognome: 'Rossi',
        numeroditelefono: 3270693054,
    },

    {   nome : 'Carla',
        cognome: 'Rossi',
        numeroditelefono: 3270693055,
    },

    {   nome : 'Michi',
        cognome: 'Rossi',
        numeroditelefono: 3270693056,
    },
];

function addUser() {

    const addName = prompt('Scrivi qui il nome del tuo nuovo contatto');

    const addSurname = prompt('Scrivi qui il cognome');

    const addNumber = prompt('Scrivi qui il numero di telefono');

    let Contact = {
        nome : addName,
        cognome : addSurname,
        numeroditelefono : addNumber,
    };

    listAddress.push(Contact);

    console.log(listAddress);

}