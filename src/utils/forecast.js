const request = require('request');



const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/d60943f536fa706b046dfbe8eba55aab/${latitude},${longitude}?units=si`;

    request({url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service");
        } else if (response.body.error) {
            callback("Unable to find location");
        } else {
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability,
                temperatureHigh: response.body.daily.data[0].temperatureHigh,
                temperatureLow: response.body.daily[0].temperatureLow
            })
        }
    })

};

module.exports = forecast;