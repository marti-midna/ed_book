// Esercizio
// Sulla base della lezione odierna:

// Creare una pagina web che mostri i risultati ottenuti dalla seguente API: https://edgemony-backend.herokuapp.com/movies

// Creare un form che permetta all'utente di aggiungere un nuovo movie all'interno

// Aggiungere una 'X' ad ogni card, rappresentante il movie, al cui click rimuove lo stesso dal server

// Avanzato
// All'esercizio cui sopra, provare ad aggiungere una modale al cui click mostri la descrizione per intero del movie in questione.

//creo la mia card

const createCard = (title, description, imgUrl, year, id) => {
    const deletEl = document.createElement('button');
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const yearEl = document.createElement("p");
    const modify = document.createElement('button');

    deletEl.classList.add('eliminami');
    divEl.classList.add("card");
    yearEl.classList.add("year");
    parDescEl.classList.add("description");
    modify.classList.add('modifica');

    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "foto film");
    divEl.setAttribute("id", id);

    deletEl.setAttribute("id", id )
    deletEl.setAttribute("onclick" , "delCard(this)");
    modify.setAttribute('id', id);
    modify.setAttribute('onclick', "modifyCard(this)");

    h3El.textContent = title;
    parDescEl.textContent = description + '...';
    yearEl.textContent = year;
    deletEl.innerHTML = '<i class="fa-solid fa-xmark"></i>' ;
    modify.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    
 /* T O G G L E  E F F E T T O  M O D A L E */
    divEl.addEventListener('click', () => {

        divEl.classList.toggle('cardeffect');
        divEl.classList.toggle('card');
    });
//-------------------------------------------------------

    divEl.append(imgEl, h3El, parDescEl, yearEl, deletEl, modify);
    document.querySelector(".card-wrapper").appendChild(divEl);
};
/* M O D I F I C O  L E  C A R D */

    function modifyCard(button)  {


        fetch('https://edgemony-backend.herokuapp.com/movies/' + button.id, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type" : "application/json",
                    },

                    body: JSON.stringify({
                        description: inputDescription.value,
                        genres: InputCategories.value,
                        poster: inputPoster.value,
                        title:inputTitle.value,
                        year: inputYear.value,
                    }),

                }).then((data) => {
                    location.reload();
                });
    };

/* E L I M I N O  L E  C A R D */

function delCard(button) {

    fetch('https://edgemony-backend.herokuapp.com/movies/' + button.id, {
            method: 'DELETE',
            headers: {
                "Content-Type" : "application/json",
            },
        }).then((data) => {
            location.reload();
        });

    let el = document.getElementById(button.id);
    el.remove();

    
}

//definisco gli input dal DOM
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");
const inputPoster = document.getElementById("poster");
const inputYear = document.getElementById("year");
const InputCategories = document.getElementById('categories')
const inputSubmit = document.getElementById("submit");
const DeleteMe = document.querySelector(".eliminami");
const formInput = document.querySelector(".forminput");
const addAllInput = document.querySelector(".allinput");

const formatDescriptionMaxtext = (text) => text.slice(0,30);

/* MOSTRO GLI UN INPUT PER AGGIUNGERE UNA CARD */
addAllInput.addEventListener('click', () =>{

    formInput.classList.toggle('show');
    formInput.classList.toggle('forminput');
    addAllInput.classList.toggle('allinput');
    addAllInput.classList.toggle('hidden');
    
});

/* A G G I U N G O  L E  C A R D */

inputSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    fetch('https://edgemony-backend.herokuapp.com/movies', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            description: inputDescription.value,
            genres: InputCategories.value,
            poster: inputPoster.value,
            title:inputTitle.value,
            year: inputYear.value,
        })

    }).then((data) => {
        location.reload();
    });
});


//-----------------------------------------------------------------------------
//chiamata API
const getMoviesData = async (URL, item = "") => {
    const res = fetch('https://edgemony-backend.herokuapp.com/movies', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await (await res).json();
    console.log(data);
    return data
};

getMoviesData().then((data) => {
    data.map((movie) =>
    createCard(movie.title, movie.description, movie.poster, movie.year, movie.id)
    );
});
