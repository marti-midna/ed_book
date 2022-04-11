document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('button').addEventListener('click', () => {

        //voglio cambiare il mio h1 quindi 
        // creo una costante e faccio trovare il tag che voglio cambiare dal document.queerySelector
        const title = document.querySelector("h1");

        // ripeto la costante.aggiungoclasse.toggle per aggiungere o rimuovere allo stesso tempo
        title.classList.toggle("change");

    });



    document.querySelector('button.prova').addEventListener('click', () => {

        const bgcolor = document.querySelector('body');

        bgcolor.classList.toggle('bgcolor');

    });

});