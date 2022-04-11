// ESERCIZIO 1 SVOLTO
// Realizzare una rubrica telefonica utilizzando gli oggetti Javascript. La lista dei numeri deve essere un array che, ad ogni sua posizione (indice), presenta un oggetto che comprenda:

// nome
// cognome
// numero di telefono
// Inserire almeno 5 persone all'interno della lista.

// L'esercizio si ritiene concluso già avendo una lista di oggetti.


//creo la mia array che ha le parentesi quadre
//let listAddress = [];

//dentro ci vanno  5 "oggetti" che saranno i tuoi utenti in rubrica
//ogni oggetto avrà come proprietà: nome, cognome, numero di telefono, dentro la array puoi anche non dichiarare il nome dell'oggetto ma se fai utente0={nome:'', cognome:'';etc} è lo stesso giusto


// let listAddress = [
//     {   nome : 'Marti',
//         cognome: 'Rossi',
//         numeroditelefono: 3270693052,
//     },

//     {   nome : 'Giacomina',
//         cognome: 'Rossi',
//         numeroditelefono: 3270693053,
//     },

//     {   nome : 'Salem',
//         cognome: 'Rossi',
//         numeroditelefono: 3270693054,
//     },

//     {   nome : 'Carla',
//         cognome: 'Rossi',
//         numeroditelefono: 3270693055,
//     },

//     {   nome : 'Michi',
//         cognome: 'Rossi',
//         numeroditelefono: 3270693056,
//     },
// ];

// console.log(listAddress);
// console.log(listAddress[2]);




//------------------------------------------


//ESERCIZIO2 SVOLTO
// Scrivere una funzione calcolatrice che svolga tutte e 4 le operazioni matematiche. La funzione dovrà accettare 3 parametri, 2 relativi ai numeri inseriti dall'utente e uno per lasciare scegliere all'utente l'operazione da svolgere.

//n°1 scrivo le mie variabili dove fare inserire i dati al mio utente.. che posso scrivere come costanti, creo quindi 3 prompt dove  il parseInt mi aiuta ad inserire dei numeri poichè il prompt genera stringhe

const primodato = parseInt(prompt('Ciao! Questa è una calcolatrice! Inserisci il primo numero'));

const tipooperazione = prompt('Seleziona un\'operazione tra + - * e /');

const secondodato = parseInt(prompt('Inserisci il secondo numero'));

// n°2 definisco la mia funzione dove altro function nomefunzion (primodatodellutente,secondodatodellutente,segnosceltodall'utente)RICORDA però puoi chiamare i parametri della tua funzione come vuoi SENZA richiamare per forza le costanti prima

function calcolatrice(primodato,secondodato,tipooperazione) {
    
    switch (tipooperazione) {
        case '+':
        return primodato + secondodato;

        case '-':
        return primodato - secondodato;

        case '*':
        return primodato * secondodato;

        case '/':
        return primodato / secondodato;

        default:
        return('operazione non valida');

    }
}

// //n°3 adesso rendi memorizzabile il risultato creando una variabile per il risultato dove avrai dopo l'uguale tutto il nome della tua funzione con i parametri

// let result = calcolatrice(primodato,secondodato,tipooperazione);

// //n°4 fai un alert per rendere visibile all'utente il risultato

// alert('Il tuo risultato è ' + result);




//----------------------------------------------
//Avanzato SVOLTO
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

console.log(listAddress);
console.log(listAddress[2]);

//aggiungo un oggetto, cioè in questo caso un nuovo utente
//creo dei prompt per immagazzinare dati

alert('Ciao! Aggiungi un nuovo contatto alla tua rubrica');


function addUser() {

    const firstName = prompt('Inserisci il tuo nome');

    const surname = prompt('Inserisci il tuo cognome');

    const numberUser = prompt('Inserisci il numero di telefono');

    let User = {
        nome : firstName,
        cognome : surname,
        numeroditelefono : numberUser,
    }

    listAddress.push(User);

    console.log(listAddress);

}
    this.addUser();
    
//creiamo una funzione per cancellare un oggetto dal mio array alla posizione che dice l'utente
    
function deleteUser() {

    const i = parseInt(prompt(`Inserisci un numero da 1 a ${listAddress.length}`));

    listAddress.splice(i-1);
    
}

this.deleteUser();

console.log('Dopo cancellazione ', listAddress);

//voglio stampare tutti gli oggetti del mio array, lo faccio con un for of

for(const elemento of listAddress) {
    console.log(elemento);
}



