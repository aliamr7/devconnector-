let getPromises = require("./getPromise");
let URL = "https://pokeapi.co/api/v2/pokemon?limitabc=50";
let badURL = "https://pokeapi.co/api/v2/pokemon-bad";
let promises = getPromises(badURL);

console.log("initial status" + JSON.stringify(promises));

const consumer = () => {
  promises.then(
    (result) => {
      console.log("inside the success");
      console.log(promises);
      console.log(result);
    },
    (error) => {
      console.log("inside the failure");
      console.log(promises);
      console.log(error);
    }
  );
};

console.log("out side the status:" + JSON.stringify(promises));
consumer();
