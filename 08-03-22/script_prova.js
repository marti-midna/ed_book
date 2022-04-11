// //COMANDI IN JAVASCRIPT

// console.log('Ciao'); //scrive ciò che voglio nel dev tool di chrome 

// prompt('pizza'); //apre una finestra modale con su scritto pizza e un campo da riempire dove immettere un valore

// alert('Questo alert è per dirti che stai sbagliando'); //apre una modale di avviso o alert con all'interno del testo



// //VARIABILI IN JAVASCRIPT
// //vengono introdotte da 
// //let nome = valorevariabile;
// //CON DATI STRING
// let paragraph = 'L\'avventura è appena cominciata'; //esempio string 1

// //esempio string 2
// let myName = 'Martina';
// let myname = "Martina";

// //CON DATI NUMBER
// let myNum = 5;
// let num = 3;
// //anche con le operazioni
// let sum = 2 + 2; //somma
// let multiple = 2*2; //moltiplicazione
// let div = 25/5; //divisione
// let mod = 25%3; //modulo
// let floatNum = 5.10;ò

// //CON DATI BOOLEANI
// let isYellow = true;
// let isPurple = false;

// //CON UNDEFINED E NULL
// let myvari = undefined; //la mia variabile non è ancora definitiva quindi non le è stato ancora assegnato alcun valore
// let myvar; //la mia variabile senza valore definito sarà undefined
// let myvaria = null; //volontariamente non ho assegnato alcun valore alla mia variabile



// //CONVERSIONE DATI PRIMITIVI NUMBER E BOOLEANI
// //date le variabili
// let numb = 5;
// let bool = true;
// //converto con la formula con
// //  nomevariabile.toString();
// //avrò quindi
// numb.toString();
// bool.toString();


// //CONVERSIONE DA STRING A NUMBER
// //let myv = '2'; //stringa perchè dentro apici la converto scrivendo
// //let myv = +'2';



//ESEMPI
// let myv = prompt('metti un valore'); //Fa una modale con un imput dove immetere il mio valore
// alert(myv); //alert modale con il valore che ho prima inserito



//IF con valori definiti
//if (10 > 5) {
//  alert('10 è maggiore di 5');   
//}

//IF CON VARIABILI DA FAR STABILIRE ALL'UTENTE

//dichiaro la variabile 
//let nomevariabile = finestramodaleconimput('testodellamodale')
// let mynumb = prompt('Inserisci qui il tuo numero preferito');

// if (mynumb > 5) {
//     alert(mynumb + " è il tuo numero preferito");
// } else { //altrimenti
//     alert(mynumb + " è minore o uguale a 5")
// }



//ALTRO ESEMPIO CON IF ED ELSE
// let mynum = prompt('Quanti anni hai?');

// if (mynum >= 18) {
//     alert('Hai 18 o più di 18 anni, puoi entrare')
// } else {
//     alert('Hai meno di 18 anni, vattene');
//     //codice che mi permette di reindirizzare l'utente in automatico ad un link o con ./ rimango nella mia pagina
//     window.location.href = "./";
// }

//ESEMPIO CON IF ELSE IF ED ELSE
//else if è una condizione in mezzo che deve stare tra IF ed ELSE

let mynumb = parseInt(prompt('Scrivi qui la tua età'));

// console.log(typeof mynumb);

// if (mynumb > 18) {
//     alert('Sei maggiorenne, puoi entrare');
// } //qui il 18 è una stringa poichè === indica eguaglianza e puoi verificare scrivendo un console.log con dentro il typeof e la variabile sotto la dichiarazione della variabile
// else if (mynumb === 18) {
//     alert('Auguri, hai da poco 18 anni');
// }
// else {
//     alert('Sei minore, vattene');
// }
 

 
//CASO CON SWITCH
switch (mynumb) {
    case mynumb > 18 :
        alert(mynumb + ' wow, sei maggiorenne');
        break; //rompe il ciclo, se hai 18 o + il ciclo si ferma qui USALO SEMPRE
    
    case 18:
        alert('Wow hai da poco compiuto ' + mynumb + ' anni!');
        break;

    case mynumb < 18:
        alert('Sei minorenne, vattene');
        break;

    default: //significa nel caso in cui nessuna delle varianti si verifica accadrà ciò che segue
        alert('valore errato');
        //window.location.href = "/";
        break;
}