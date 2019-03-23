const request = require('request')

const DARKSKY_API_BASE_URL = 'https://api.darksky.net/forecast/e40603f15f1b4f991935f40ecb7a4c38/'

//Call Darksky API to get the weather details


const forecast = (latitude, longitude, callback) => {
    DARKSKY_CALLING_API = DARKSKY_API_BASE_URL + latitude + ',' + longitude
    request({
        uri: DARKSKY_CALLING_API,
        json: true
    }, (error, response) => {
        if (error) {
            callback("Cannot connect to the weather service", undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            callback(undefined, {
                summary: response.body.daily.summary
            })
        }
    })
}

module.exports = forecast