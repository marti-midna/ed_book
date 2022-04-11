// Esercizio
// Sulla base della lezione odierna, e riprendendo le esercitazioni passate, creare una rubrica completa! Che:

// mostri la lista dei contatti presenti (createne pure una a scelta di almeno 5 individui)
// permette l'aggiunta di nomi alla lista dei contatti
// permetta la rimozione di un determinato contatto (scegliete l'approccio che preferite)
// che conservi e peschi la lista dei contatti servendoci del LocalStorage
// Il tutto dovrà essere completo di html/css, di fatto dobbiamo creare una rubrica utilizzabile dagli ipotetici utenti.

// Avanzato:
// Per chi volesse cimentarsi già con l'implementazione di try/catch, provare ad integrare nell'esercizio sopra un controllo per ognuna delle quattro funzionalità.


//creo il mio arrey di oggetti
const rubrica = [
    {
        nome: 'Martina',
        cognome: 'Aruta',
        telefono: '1234567890',
    },
    {
        nome: 'Salem',
        cognome: 'Aruta',
        telefono: '3333333333',
    },
    {
        nome: 'Michi',
        cognome: 'Aruta',
        telefono: '4444444444',
    },
    {
        nome: 'Carla',
        cognome: 'Aruta',
        telefono: '6555555555',
    },
    {
        nome: 'Nate',
        cognome: 'Aruta',
        telefono: '7777777777',
    }
];

//stampo il mio arrey dentro l'div id contatti in html

const list = document.getElementById('contatti');

const Stamp = () => {
    list.innerHTML = rubrica
    .map((element, index) => 
    `<div class='item-card'>
    <h3>${element.nome} ${element.cognome}</h3> 
    <p>${element.telefono}</p>
    <button id="${index}" onclick="deleteEl(${index})">x</button>
    </div>`
    )
    .join('');
};

Stamp(rubrica);

//aggiungo un contatto alla mia rubrica



const AddContact = document.getElementById('submit');

AddContact.addEventListener('click', () =>{

    //digli di prendersi i valori delle input 
    const addName = document.getElementById('add-nome').value;
    const addSur = document.getElementById('add-cognome').value;
    const addNumb = document.getElementById('add-telefono').value;

    if (addName !== '' && addSur !== '' & addNumb !== '') {

        let newContact = {
            nome: addName,
            cognome: addSur,
            telefono: addNumb,
        }

        rubrica.push(newContact);

        Stamp(rubrica);
        localStorage.setItem("rubrica", JSON.stringify({rubrica}));

    } else {
        alert('Attenzione, compila tutti i campi');
    }
    

    
});

//try catch mi servono per gestire le eccezioni
//cath conterrà in blocco codice ciò che serve per gestire la problematica

function deleteEl(index) {

    console.log(index);

    try{
        let newRubrica = rubrica;
        newRubrica.splice(index, 1);
        Stamp(newRubrica);
        localStorage.setItem("rubrica", JSON.stringify({rubrica}));

    } catch {
        alert('Impossibile cancellare l\'elemento');
    }
}
