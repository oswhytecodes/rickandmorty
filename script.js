const cardCont = document.querySelector(".card_container");

// third option
//api call
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => rickAndMorty(data.results));

//dom
let rickAndMorty = (characters) => {
  // In order to create multiple cards, the easest option is to build the html in Javascript
  characters.forEach((character) => {
    cardCont.innerHTML =
      cardCont.innerHTML +
      `   <div class='card'>
          <img src=${character.image}> </img>
          <p>Name: ${character.name} </p>
          <p>Species: ${character.species} </p>
          <p>Species: ${character.status} </p>
          </div>
        `;
  });
};
