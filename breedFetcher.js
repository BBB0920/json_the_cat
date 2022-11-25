const request = require('request');
const args = process.argv;

request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {

  if (response.statusCode !== 200 || error) {
    return console.log(`Error: ${error} was encountered.`);
  }

  const data = JSON.parse(body);

  for (let i in data) {
    if (data[i].name === args[2]) {
      return console.log(data[i].description);
    }
  }

  return console.log(`The species ${args[2]} does not exist!`);

});