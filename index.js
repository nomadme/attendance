const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

// routes
const venuesRoutes = require('./routes/venues')

dotenv.config({path: './config/config.env'})

const app = express()

// middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// route
app.use('/v1/venues', venuesRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port:${process.env.PORT}`)
})
