const request = require('postman-request');

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

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib2RhbmlzNzEiLCJhIjoiY2tzNTFrdXBsMTJ1ZzJ2bnRnYnR4NGFlZiJ9.kBfngGdrZ4v7jOOkBnUNZQ&limit=1"

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to location services')
//     } else if(response.body.features.length === 0){
//         console.log('Unable to find location!')
//     }
//     else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//         console.log(`${latitude} latitude & ${longitude} longitude!`)
//     }
// })


geoCode('12what', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
});

