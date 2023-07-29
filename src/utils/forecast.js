const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=8b9f449b15a30395aa3f8da0ec018f64&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('No connectivity', undefined)
        } else if (body.error) {
            callback('No location found', undefined)
        } else {
            const curr = body.current
            let cityName = body.location.name;
            let { feelslike } = curr;
            let temp = curr.temperature;
            let rain = curr.precip;
            callback(undefined, '\n' + curr.weather_descriptions + '. The temperature in ' + cityName + ' is ' + temp + '˚C degrees' + ' feelslike ' + feelslike + '˚C degrees and possibility of rain is of ' + rain + '%.\n');
        }
    })
}
module.exports = forecast;
