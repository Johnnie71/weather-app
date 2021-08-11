const geoCode = require('./utilis/goecode');
const forecast = require('./utilis/forecast');

const address = process.argv[2];

//checking to see if an address was provided
if(!address){
    return console.log('Address needed!')
}

geoCode(address, (error, { latitude, longitude, location } = {}) => {
//checking to see if there is an error
    if(error){
        return console.log(error)
    }

 //if everything passes then the forecast is checked   
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
      })
});

