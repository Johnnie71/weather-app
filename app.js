const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=3cd3eee99cacfba5d7e860d49be3016d&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current)
})