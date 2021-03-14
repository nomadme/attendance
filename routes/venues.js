const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({success: true, message: 'Listing all venues', data: []})
})

router.get('/:id', (req, res) => {
  res.status(200).json({success: true, message: `Listing venue id: ${req.params.id}`, data: []})
})

router.post('/', (req, res) => {
  res.status(200).json({success: true, message: 'Created venue'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({success: true, message: `Updating venue id: ${req.params.id}`, data: []})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({success: true, message: `Deleting venue id: ${req.params.id}`, data: []})
})

module.exports = router
