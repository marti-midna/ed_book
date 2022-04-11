// CREO LA MIA CALCOLATRICE 

//prompt crea la modale per immagazzinare il primo dato
let firstNum = parseInt(prompt('Inserisci il primo dato'));
//prompt crea la modale per immagazzinare il tipo di operazione
let userOperation = prompt('Quale operazione vorresti svolgere? + - * / %');
//prompt crea la modale per immagazzinare il secondo dato
let secondNum = parseInt(prompt('Inserisci il secondo dato')); 
let result;
 
// IF per processare i dati
//se ("l'operazione è una somma") io faccio una somma
// if (userOperation === '+') {
//     result = firstNum + secondNum; 
// } 
// else if (userOperation === '-') {
//     result = firstNum - secondNum;
// }
// else if (userOperation === '*') {
//     result = firstNum * secondNum;
// }
// else if (userOperation === '/') {
//     result = firstNum / secondNum;
// }
// // modulo, fa veedere all'utente il resto dell'operazione
// else  if (userOperation === '%') {
//     result = firstNum % secondNum;
// }

// //alert con la risultante delle operazioni
// alert(result);




// SWITCH per processari

switch (userOperation) {
    case '+':
        result = firstNum + secondNum;
        break; //se l'operazione è giusta ci si ferma qui
    
    case '-':
        result = firstNum - secondNum;
        break;

    case '*':
        result = firstNum * secondNum;
        break;

    case '/':
        result = firstNum / secondNum;
        break;

    case '%':
        result = firstNum % secondNum;
        break;
    
    default:
        alert('valore errato, inserisci un ')
}
alert('Il tuo risultato è ' + result)



//    === uguaglianza stretta (dove confronti valore e tipo delle variabili)
//    = assegnazione
//    == uguaglianza (dove confronti solo il valore) 