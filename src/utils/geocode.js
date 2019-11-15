const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?country=US&access_token=pk.eyJ1IjoibWF4anBhdWwiLCJhIjoiY2sydWtvN29pMTJpeTNjcDV2YnZvOHpkdiJ9.gJlKyRNytfKLGQJMI6lEeg';
    
    request({url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!');
        } else if (response.body.features.length == 0) {
            callback("Unable to find the location");
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                place_name: response.body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;


