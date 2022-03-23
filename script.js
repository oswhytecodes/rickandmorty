// const cardImage = document.querySelector(".image");
// const cardName = document.querySelector(".name");
// const cardSpecies = document.querySelector(".species");

const card = document.querySelector(".card");
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
      `
    <div class='card'>
    <img src=${character.image}> </img>
    <p>Name: ${character.name} </p>
    <p>Species: ${character.species} </p>
    <p>Species: ${character.status} </p>

    </div>
    `;
  });
};

// // 2nd Option
// fetch("https://rickandmortyapi.com/api/character")
//   .then((res) => res.json())
//   .then((data) =>
//     data.results.forEach((result) => {
//       cardImage.src = `${result.image}`;
//       cardName.textContent = `Name: ${result.name}`;
//       cardSpecies.textContent = `Species: ${result.species}`;
//     })
//   );

// // 1st option
// let cards = [];
// let rickAndMorty = () => {
//   return fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => data.results.map((result) => cards.push(result)));
// };

// let apiData = cards.map((character) => {
//   cardCont.innerHTML =
//   `Name: ${character.name}
//   Species: ${character.species}
//   Status: ${character.status}
//   Type: ${character.type} <br>`;
// });
// rickAndMorty();
// console.log(cards);
