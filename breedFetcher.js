const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/', (error, response, body) => {

    if (error || response.statusCode !== 200) {
      return callback(error, null);
    }

    const data = JSON.parse(body);

    for (let i in data) {
      if (data[i].name === breedName) {
        return callback(null, data[i].description);
      }
    }

    return callback(null, `${breedName} is not an available breed in the database.`);
  });
};

module.exports = { fetchBreedDescription };
