export {createCard, getAPIdata, formatMaxtext, formatTitleMaxtext};

//creo la costante di creazione card 

const createCard = (title, desc, imgUrl, price) => {
    //creo gli elementi/tag che vanno nll card
    const divEl = document.createElement('div');
    const h3El = document.createElement('h3');
    const parDescEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const parPriceEl = document.createElement('p');
    const deletEl = document.createElement('button');

    parDescEl.classList.add('descrizione');
    deletEl.classList.add('eliminami');
    parPriceEl.classList.add('prezzo');

    

    //do gli attributo ad alcuni elementi
    //--------struttura('nome attributo' , suo valore)
    imgEl.setAttribute('src', imgUrl);
    imgEl.setAttribute('alt', 'prodotto');
    divEl.classList.add('card')
    deletEl.setAttribute('onclick', 'deleteEl(${index}');

    //aggiungo i contenuti api ai tag
    h3El.textContent = title;
    parDescEl.textContent = desc + ' ...';
    parPriceEl.textContent = price + '$';
    deletEl.textContent = 'x';

    //dichiaro che gli elementi dentro la card sono tutti figli di questo div card
    divEl.append( deletEl, h3El, parDescEl, imgEl, parPriceEl,);

    //posiziono il mio div dentro al mio body
    document.querySelector('.card-wrapper').append(divEl);

};

//creo la costante api che con async e await fetch chiama i dati api che vengono dall'esterno
const getAPIdata = async (URL, item = "") => {
    const res = await fetch(`${URL}${item}`);
    return await res.json();
};


const formatMaxtext = (text) => text.slice(0, 60);

const formatTitleMaxtext = (text) => text.slice(0,20);

