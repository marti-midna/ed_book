/* Realizzare una piccola web app per visualizzare delle card con i nomi del personaggi e l'universo di appartenenza stilati in maniera differente.

Requisiti:

visualizzazione dati iniziale
filtrare i dati nella lista utilizzando una ricerca testuale
possibilità di aggiungere un nuovo elemento tramite due campi di testo (nome e universo)
stilare gli elementi in lista per trasformarli in "cards" */

// const people = [
//     "Luke Skywalker - Star Wars",
//     "Jack Burton - Grosso guaio a Chinatown",
//     "Jhonny Silverhad - Cyberpunk 2077",
//     "Bilbo Baggins - Il signore degli anelli",
//     "Rick Sanchez - Rick & Morty",
//     "Master Chief - Halo",
//     "Eleven - Stranger Things",
// ];

const people = [
    {
        personaggio : 'Luke Skywalker',
        film : 'Star Wars',
    },
    {
        personaggio : 'Jack Burton',
        film:'Grosso guaio a Chinatown',
    },
    {
        personaggio : 'Jhonny Silverhad',
        film : 'Cyberpunk 2077',
    },
    {
        personaggio : 'Bilbo Baggins',
        film : 'Il signore degli anelli',
    },
    {
        personaggio : 'Rick Sanchez',
        film : 'Rick & Morty',
    }, 
    {
        personaggio : 'Master Chief',
        film : 'Halo',
    },
    {
        personaggio : 'Eleven',
        film : 'Stranger Things',
    },
];

//stampo il mio arrey di oggetti
const list = document.querySelector('#space-card');

const Stamp = (newStamp) => {
    list.innerHTML = newStamp
    .map((element) =>
    `<div class="item-card">
        <h4>${element.personaggio}</h4>
        <p>${element.film}</p>
    </div>`
    )
    .join('');
};

Stamp(people);

//ricerco tra la lista attuale

document.querySelector('#user-search').addEventListener('keyup', () =>{

    const userSearch = document.querySelector('#user-search').value;

        
        let filteredList = people 
        .filter((element) => {
            if ( element.personaggio
                .toLowerCase().trim().includes(userSearch.toLowerCase().trim()) ||  element.film.toLowerCase().trim().includes(userSearch.toLowerCase().trim())) {
                return element
            }

        });
        Stamp(filteredList);
});
    
document.getElementById('add-card').addEventListener('click', () => {

    const personaggio = document.getElementById('personaggio').value;
    const film = document.getElementById('film').value;

    if (personaggio !== '' && film !== '') {
        
        let newCard = {
            personaggio : personaggio,
            film : film,
        }
    
        people.push(newCard);
    
        Stamp(people);
    } else {
        alert('Attenzione! Compila tutti i campi');
    }

});

//cerca personaggi con click al pulsante
document.getElementById('find-character').addEventListener('click', () => {

    const userSearch = document.querySelector('#user-search').value;

        
        let filteredList = people 
        .filter((element) => {
            if ( element.personaggio
                .toLowerCase().trim().includes(userSearch.toLowerCase().trim()) ||  element.film.toLowerCase().trim().includes(userSearch.toLowerCase().trim())) {
                return element
            }

        });
        Stamp(filteredList);
});    




