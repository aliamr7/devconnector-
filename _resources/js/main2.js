let getPromise = require("./getPromise");
const ALL_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

let promise = getPromise(ALL_POKEMONS_URL);

promise
  .then((result) => {
    let onePokemon = JSON.parse(result).results[0].url;
    console.log(onePokemon);
    return onePokemon;
  })
  .then((onePokemonURL) => {
    console.log("inside the 2nd then");
    console.log(onePokemonURL);
    return getPromise(onePokemonURL);
  })
  .then((pokemon) => {
    console.log(JSON.parse(pokemon));
  })
  .catch((error) => {
    console.log("In the catch", error);
  });
