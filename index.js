const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')

// routes
const venuesRoutes = require('./routes/venues')

// load environment variables
dotenv.config({path: './config/config.env'})

// connect to database
connectDB()

const app = express()
// body parser
app.use(express.json())

// middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// route
app.use('/v1/venues', venuesRoutes)
app.use(errorHandler)

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port:${process.env.PORT}`.yellow.bold)
})

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // close server and exit process
  server.close(() => process.exit(1))
})
