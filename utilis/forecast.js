const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3cd3eee99cacfba5d7e860d49be3016d&query=${latitude},${longitude}&units=f`;
   
    request({ url, json: true }, (error, { body }) => {
        
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance of rain.`)
        }
    })
}

module.exports = forecast;