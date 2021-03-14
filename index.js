const express = require('express')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})

const app = express()
const port = process.env.PORT || 5000

app.get('/v1/venues', (req, res) => {
  res.status(200).json({success: true, message: 'Listing all venues', data: []})
})

app.get('/v1/venues/:id', (req, res) => {
  res.status(200).json({success: true, message: `Listing venue id: ${req.params.id}`, data: []})
})

app.post('/v1/venues', (req, res) => {
  res.status(200).json({success: true, message: 'Created venue'})
})

app.put('/v1/venues/:id', (req, res) => {
  res.status(200).json({success: true, message: `Updating venue id: ${req.params.id}`, data: []})
})

app.delete('/v1/venues/:id', (req, res) => {
  res.status(200).json({success: true, message: `Deleting venue id: ${req.params.id}`, data: []})
})

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port:${process.env.PORT}`)
})
