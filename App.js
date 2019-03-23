const request = require('request')


// const DARKSKY_API_BASE_URL = 'https://api.darksky.net/forecast/e40603f15f1b4f991935f40ecb7a4c38/37.8267,-122.4233'





// //Call Mapbox API for location geocoding
// location = request({
//     uri: MAPBOX_API_URL,
//     json: true
// }, (error, response) => {
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]
//     console.log(longitude, latitude)
// })

const geocode = (address, callback) => {
    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoidXZpc2hlcmUiLCJhIjoiY2pleHBjOWtjMTZidTJ3bWoza3dlZmIxZiJ9.HvLEBmq44mUfdgT7-C73Jg'
    const MAPBOX_API_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + MAPBOX_ACCESS_TOKEN + '&limit=1'

    request({
        uri: MAPBOX_API_URL,
        json: true
    }, (error, response) => {
        if (error) {
            callback('unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('darwin', (error, data) => {
    console.log('error: ', error)
    console.log('Data: ', data)
})




//Call Darksky API to get the weather details
// DARKSKY_CALLING_API = 'https://api.darksky.net/forecast/e40603f15f1b4f991935f40ecb7a4c38/' + location[0], location[1]

// request({
//     uri: DARKSKY_CALLING_API,
//     json: true
// }, (error, response) => {
//     // console.log(response.body.daily.summary)
// })