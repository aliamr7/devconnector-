var XMLHttpRequest = require("xhr2").XMLHttpRequest;
const getPromise = (urlToGetData) => {
  let promise = new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", urlToGetData);
    req.onload = () => {
      if ((req.status = 200)) {
        resolve(req.response);
      } else {
        reject("error: " + req.statusText);
      }
    };
    req.send();
  });
  return promise;
};
module.exports = getPromise;
// module  :
// exports  :will allow us to access this fuction / anything out of the module.
