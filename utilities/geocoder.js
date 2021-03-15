const NodeGeocoder = require('node-geocoder')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_API_KEY,
  httpAdapter: 'https',
  formatter: null
}

module.exports =  NodeGeocoder(options)
