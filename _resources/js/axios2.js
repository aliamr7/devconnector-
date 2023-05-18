const axios = require("axios");
const multipleRequests = () => {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos/1"),
      axios.get("https://jsonplaceholder.typicode.com/todos/2"),
    ])
    .then((responseArray) => {
      //this will be executed only when all requests are successful
      console.log("=> Request ID: ", responseArray[0].data.id);
      console.log("=> Request ID: ", responseArray[1].data.id);
    });
};

multipleRequests();
