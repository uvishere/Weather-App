const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Get the address from the user
const address = process.argv[2]

if (!address) {
    console.log("Enter a valid address")
} else {
    // call the geocode and forecast functions
    geocode(address, (error, data) => {
        if (error) {
            return console.log('Error:', error)
        }

        forecast(data.longitude, data.latitude, (error, forecastData) => {
            if (error) {
                return console.log('Error:', error)
            }
            console.log('Location: ', data.location)
            console.log('ForeCast', forecastData.summary)
        })
    })

}