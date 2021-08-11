const geoCode = require('./utilis/goecode');
const forecast = require('./utilis/forecast');

const address = process.argv[2];

geoCode(address, (error, data) => {
//destructuring the data
    const {latitude, longitude} = data

//checking to see if there is an error
    if(error){
        return console.log(error)
    }
//checking to see if an address was provided
    if(!address){
        return console.log('Address needed!')
    }
    
 //if everything passes then the forecast is checked   
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
      })
});

