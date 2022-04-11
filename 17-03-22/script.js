// ### Esercizio

// Dato un array di film:

// ```javascript
// const movies = [
//   "Deadpool",
//   "Dune",
//   "Grosso guaio a Chinatown",
//   "V per vendetta",
//   "Pulp Fiction",
//   "Signore degli anelli",
//   "Scarface",
//   "Sharknado (1,2,3,4,5 e 6)",
//   "Blade Runner",
// ];
// ```

// - "stampare" questi in pagina in una lista HTML
// - aggiungere una input di testo e un button sopra la lista, quando clicco il button la lista nella pagina dovrà essere filtrata in base al testo scritto nella input
// - [opzionalmente] stilare il tutto

const movies = [
  "Deadpool",
  "Dune",
  "Grosso guaio a Chinatown",
  "V per vendetta",
  "Pulp Fiction",
  "Signore degli anelli",
  "Scarface",
  "Sharknado (1,2,3,4,5 e 6)",
  "Blade Runner",
];

//creo una costante segnalando il punto in cui i miei film andaranno inseriti
const list = document.querySelector('#dinamica');

/*
creo la costante renderList e creo la funzione
dentro la funzione devo stampare dentro il mio html quindi
inserisco la costante in cui devo inserire la mia lista cioè in "list" che è dentro il tag <ul> con id #dinamica
inserisco.HTML = il mio arrey che va prima mappato per creare un nuovo array che mi permette di inserire le mie modifiche come inserire ogni film dentro un tag <li></li>
poi devo joinare, perchè?
innerHTML vuole una sola stringa con tanti elementi
map crea invece un array di elementi stringhe
per trasformare più stringhe in una sola stringa devo usare .join
poi richiamo la funzione
*/

const renderList = (movielist) => {
    list.innerHTML = movielist
    .map((element) =>
    `<li>${element}</li>`
    )
    .join('');
};

renderList(movies);

// - aggiungere una input di testo e un button sopra la lista, quando clicco il button la lista nella pagina dovrà essere filtrata in base al testo scritto nella input



// document.querySelector('.btn').addEventListener(('click'), () => {

//   const userInput = document.getElementById('input-search').value; //cioò che utente scrive nella mia input

//   //prendo il valore dalla input e filtro il mio array
//   const Search = () => {
//     const filteredList = movies
//     .filter((element) => userInput.toLowerCase() === element.toLowerCase());

//     renderList(filteredList);
//   }
//   Search();

// });
//NON TOCCARE SU

document.querySelector('.btn').addEventListener(('click'), () => {

  const userInput = document.getElementById('input-search').value; //cioò che utente scrive nella mia input

  //prendo il valore dalla input e filtro il mio array
  const Search = () => {
    const filteredList = movies
    .filter((element) => userInput.toLowerCase() === element.toLowerCase());

    renderList(filteredList);


  }

  Search();

});