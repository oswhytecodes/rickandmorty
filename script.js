const card = document.querySelector(".card");
const cardImage = document.querySelector(".image");
const cardName = document.querySelector(".name");
const cardSpecies = document.querySelector(".species");
const cardCont = document.querySelector(".card_container");


// fetch("https://rickandmortyapi.com/api/character")
//   .then((res) => res.json())
//   .then((data) => rickAndMorty(data.results));

// let rickAndMorty = (characters) => {
//   characters.forEach((character) => {
//     cardImage.src = `${character.image}`;
//     cardName.textContent = `Name: ${character.name}`;
//     cardSpecies.textContent = `Species: ${character.species}`;
//   });
// };

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

// 1st option
let cards = [];
let rickAndMorty = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => data.results.map((result) => cards.push(result)));
};

let apiData = cards.map((character) => {
  cardCont.innerHTML = 
  `Name: ${character.name}  
  Species: ${character.species}  
  Status: ${character.status} 
  Type: ${character.type} <br>`;
});
rickAndMorty();
console.log(cards);
