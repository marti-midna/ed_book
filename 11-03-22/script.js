/*
ESERCIZI SULLO SCOPE ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!! Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'. */

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log? // RISPOSTA:

const PI = 3.14;

console.log(PI);

if (PI >= 3) { console.log(PI); }

// IPOTESI :  entrambi i console.log danno stampato 3.14



// ESERCIZIO2
var favColour = "violet"; let monthsInAYear = 12;

if (true) { var favColour = "violet"; console.log("Il mio colore preferito è:", favColour); }

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// IPOTESI : in console.log avrò in stampa rispettivamente "Il mio colore preferito è: violet" 
// e "Ci sono 12 mesi in un anno", in teoria il console.log richiama il var più vicino che è quello dentro la funzione, malgrado sia uguale al primo var dichiarato; quindi non dovrebbero esserci errori.



// ESERCIZIO3

// Dato il seguente, qual è il risultato dei console.log? // 

function makePizza(moreIngredients) { let theSecond = "Sugo di pomodoro freschissimo"; // { ... } console.log(theSecond + ", " + moreIngredients); return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!) 
}

if (true) { makePizza("rucola, prosciutto crudo e scaglie di grana."); console.log("Il secondo ingrediente necessario: ", theSecond); }

//IPOTESI
// in console.log non dovrebbe spuntare nulla perchè chiama una variabile dichiarata fuori dallo scope if