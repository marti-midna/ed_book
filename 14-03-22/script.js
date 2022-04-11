// console.log('file caricato');
//significa comando log dentro l'oggetto console

/*seleziona un elemento nella pagona utilizzando la sintassi dei selettori*/
// document.querySelector('h1').style.color = "red";
// document.querySelector('h1').innerHTML = 'Non mi sento più quello di prima';

//facendo una costante cambio la sintassi ma non la sostanza ma evito di scrivere più di una volta la querySelector

// const title = document.querySelector('h1');

// title.style.color = 'red';
// title.innerHTML = 'Non sono più lo stesso di prima';
// title.id = 'newID';

// quando ti clicco esegui una funzione 
// document.querySelector('button').addEventListener('click', () => {
//     console.log('mi hai cliccato');

//     const title = document.querySelector('h1');

//     title.style.color = 'red';
//     title.innerHTML = 'Non sono più lo stesso di prima';
//     title.id = 'newID';
// }); 


// qui invece di mettere uno stile in linea dico a js di applicare una classe al mio html.. codice più pulito
// document.querySelector('button').addEventListener('click', () => {
//     console.log('mi hai cliccato');

//     const title = document.querySelector('h1');

//     title.classList.add('change');
//     title.innerHTML = 'Non sono più lo stesso di prima';
//     title.id = 'newID';
// }); 




// aggiungo un evento DOMContentLoaded all'intero documento per rendere il DOM pronto a tutte le modifiche anche se il tag script è dentro la <head>
document.addEventListener('DOMContactLoader', () => {
    //cerco con querySelector il bottone, con addEventListener aggiungo QUANDO l'azione avviene e aggiungo la funzione () => {} quindi gli dico di eseguire la funzione quando clicco button 
    document.querySelector("button").addEventListener("click", () => {

        //creo la mia costante "title" perchè voglio modificare il mio h1 e trovo il mio h1 con il queerySelector
        const title = document.querySelector("h1");

        //data la costante title modifica lo stile del colore del mio h1, modifica distruttiva mettendo uno stile inline - non consigliato -
        // title.style.color = "red";

        //per aggiungere una classe uso classList.add("nomedellaclassechevoglioinserire");
        // title.classList.add("change");

        //uso il comando classList.toggle quando vuoi alternare due condizioni.. come un interruttore della luce.
        title.classList.toggle("change");
        
        //modifico il mio title tramite il comando .innerHTML che sostituirà il testo dentro il mio tag h1 - distruttiva
        // title

        //se voglio aggiungere un id scrivo semplicemente
        title.id = "newID";

    });

});