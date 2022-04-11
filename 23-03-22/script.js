import { createCard, getAPIdata, formatMaxtext, formatTitleMaxtext } from "./utils.js";

//chiamo la mia API dal link.then e gli dico di mappare ogni prodotto riportando alcuni valori delle key
getAPIdata('https://fakestoreapi.com/products')
.then((data) => {
    console.log(data);
    data.map(product => 
        createCard(
            formatTitleMaxtext(product.title), 
            formatMaxtext(product.description),
            product.image, 
            product.price)
    );
    
    const cards = document.querySelectorAll(".card");

     cards.forEach( (card) => card.addEventListener("click", () => card.classList.add("remove")) )
});


