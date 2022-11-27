const request = require('request');
const args = process.argv;

request('https://api.thecatapi.com/v1/breeds/', (error, response, body) => {

  if (error) {
    response;
    return console.log(error);
  }

  const data = JSON.parse(body);

  for (let i in data) {
    if (data[i].name === args[2]) {
      return console.log(data[i].description);
    }
  }

  return console.log(`${args[2]} is not an available breed in the database.`);

});
