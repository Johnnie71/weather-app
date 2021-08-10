const request = require('postman-request');
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3cd3eee99cacfba5d7e860d49be3016d&query=${latitude.toString()},${longitude.toString()}units=f`;


}

module.exports = forecast;