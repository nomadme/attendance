const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})
const Venue = require('./models/Venue')

// connect db
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

// read json files
const venues = JSON.parse(fs.readFileSync(`${__dirname}/data/venues.json`, 'utf-8'))

// import into db
const importData = async () => {
  try {
    await Venue.create(venues)
    console.log('import done'.green.inverse)
  } catch (e) {
    console.error(e)
  }
}
