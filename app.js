const geoCode = require('./utilis/goecode');
const forecast = require('./utilis/forecast');

geoCode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
      })
});

