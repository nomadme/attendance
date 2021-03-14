const express = require('express')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})

const app = express()
const port = process.env.PORT || 5000

// app.get('/', (req, res) => {
//   res.send("Get the attendance list")
// })

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port:${process.env.PORT}`)
})
