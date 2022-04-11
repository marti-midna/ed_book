// Avanzato:
// Riprendendo l'esercizio lasciato Venerdì scorso(card personaggio-film), provate a sostituire l'array di elementi con una chiamata fetch. Utilizzate le API presenti a questo indirizzo: https://swapi.dev/
// (Tips. leggete la documentazione!)


//creo i miei tag dove inserisco i miei dati
const createCard = (name, height, mass, hair_color, skin_color) => {
    const divElement = document.createElement('div');
    const imgElement = document.createElement('img');
    const h3Element = document.createElement('h3');
    const heights = document.createElement('p');
    const masss = document.createElement('p');
    const hair_colors = document.createElement('p');
    const skin_colors = document.createElement('p');

    //inserisco img
    imgElement.setAttribute('src', "");
    imgElement.setAttribute('alt', '');

    //creo il contenuto dentro i tag
    h3Element.textContent = name;
    heights.textContent = height;
    masss.textContent = mass;
    hair_colors.textContent = hair_color;
    skin_colors.textContent = skin_color;

    //strutturo la card
    divElement.append(imgElement, h3Element, heights, masss, hair_colors, skin_colors);

    //creo la struttura della card dentro il mio body
    document.body.appendChild(divElement);
}
createCard();

//richiamo tutti i dati che mi servono con la fetch

fetch("https://swapi.dev/api/people/")
.then( (res) => res.json() )
.then( (data) => {
    data.results.map((result) => 
        
        createCard(
            result.name,
            result.height,
            result.mass,
            result.hair_color,
            result.skin_color)
         );
});

