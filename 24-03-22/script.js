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

    deletEl.classList.add('eliminami');
    divEl.classList.add("card");
    yearEl.classList.add("year");
    parDescEl.classList.add("description");

    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "foto film");
    divEl.setAttribute("id", id);

    deletEl.setAttribute("id", id )
    deletEl.setAttribute("onclick" , "delCard(this)");

    h3El.textContent = title;
    parDescEl.textContent = description + '...';
    yearEl.textContent = year;
    deletEl.innerHTML = '<i class="fa-solid fa-xmark"></i>' ;
    

    divEl.append(imgEl, h3El, parDescEl, yearEl, deletEl);
    document.querySelector(".card-wrapper").appendChild(divEl);

    
    divEl.addEventListener('click', () => {

        divEl.classList.toggle('cardeffect');
        divEl.classList.toggle('card');
    });

};

// al click elimina card

function delCard(button) {

    fetch('https://edgemony-backend.herokuapp.com/movies/' + button.id, {
            method: 'DELETE',
            headers: {
                "Content-Type" : "application/json",
            },
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
const DeleteMe = document.querySelector(".eliminami")

const formatDescriptionMaxtext = (text) => text.slice(0,30);

//al click aggiungi card

inputSubmit.addEventListener('click', (event) => {
    event.preventDefault();


    //aggiungo card tramite fetch al server
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
