const request = require('postman-request');
const geoCode = require('./utilis/goecode');

// const url = 'http://api.weatherstack.com/current?access_key=3cd3eee99cacfba5d7e860d49be3016d&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log("Unable to connect to weather service")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     }
//     else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance of rain.`);
//     }
// })

geoCode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
});

