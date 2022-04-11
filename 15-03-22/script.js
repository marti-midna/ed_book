// const AddVAT = (value, vat = 22) => {
//     const add = (value / 100) * vat;
//     const total = value + add;
// };

// //PARAMETRIZZO LA MIA VALUE
// AddVAT(200);

// creo una funzione a cui do un nome che mi servirà per riportarmi il presso compreso di iva di ciò che sto acquistando

// const addIva = () => {

// };

//la invoco per eseguirla

// addIva ();

//aggiungo alla mia funzione due parametri che mi servono per svolgerla
//iva = prezzo * iva / 100
//????????????????????????????????????????????
// const price = parseFloat(prompt('digita qui il prezzo in euro a cui vuoi aggiungere l\'iva'));

document.querySelector('div.calculator button').addEventListener('click', () => {

    //creo alias per evitare di scrivere tutta la dicitura document.querySelector etc
    const q = (selector) => document.querySelector(selector);
        

    const price = q(".calculator input").value;
    
    /**
     * add a price to given price+iva
     * @param {number} price 
     * @param {number} vat 
     * @returns {number}
     */
    const addIva = (price, vat = 22) => {

        const result = ( price / 100 ) * 22 ;
        //dichiaro un'altra costante a cui aggiungere result
        const total = result + price;
        //voglio che mi ritorni il totale
    return total;

    };
    console.log(addIva);

    








});

    
//-----------------------------------------------------------------------
/* CLICK BOTTONI */
/* ROSA */
//trovo cerchio1 e con "aggiungo" un click
document.querySelector("div.cerchio1").addEventListener('click', () => {

    //creo una nuova costante per cercare ciò che voglio modificare
    const bg = document.querySelector("div.calculator");

    //aggiungo una classe al mio primo cerchio per attribuirgli un colore
    bg.classList.add("pinky");

});

/* VERDE */
document.querySelector('div.cerchio2').addEventListener('click', () => {

    const bg_v = document.querySelector("div.calculator");

    bg_v.classList.add('green');
});

/* ARANCIO */
document.querySelector('div.cerchio3').addEventListener('click', () => {

    const bgo = document.querySelector("div.calculator");

    bgo.classList.add('orange');
});

