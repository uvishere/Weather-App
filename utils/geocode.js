const request = require('request')

// Get the geocode of the given address
const geocode = (address, callback) => {
    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoidXZpc2hlcmUiLCJhIjoiY2pleHBjOWtjMTZidTJ3bWoza3dlZmIxZiJ9.HvLEBmq44mUfdgT7-C73Jg'
    const uri = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + MAPBOX_ACCESS_TOKEN + '&limit=1'

    request({
        uri,
        json: true
    }, (error, {body} )  => {
        if (error) {
            callback('unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode