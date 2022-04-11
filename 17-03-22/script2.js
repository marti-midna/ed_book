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
  
  const list = document.querySelector('#dinamica');
  
  const renderList = (movielist) => {
      list.innerHTML = movielist
      .map((element) =>
      `<li>${element}</li>`
      )
      .join('');
  };
  
  renderList(movies);

  
  document.querySelector('.btn').addEventListener(('click'), () => {
  
    const userInput = document.getElementById('input-search').value; //cioò che utente scrive nella mia input
  
    //prendo il valore dalla input e filtro il mio array
    const Search = () => {
      const filteredList = movies
      .filter((element) => element
      .toLowerCase().includes(userInput.toLowerCase()));
      console.log(filteredList);

  
       renderList(filteredList.length ? filteredList : movies);
    }
    Search();
  
  });

  
