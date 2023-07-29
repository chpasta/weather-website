const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2hjYXZhbGNhbnRlIiwiYSI6ImNsa2Z5N2ZmYTFiY20zbXM5OG5rbDQxcXYifQ.yy9IwANGtCjev4S7fdseYA&limit=1';

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('No connectivity', undefined);
        } else if (body.features[0].length === 0) {
            console.log('No data found', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;