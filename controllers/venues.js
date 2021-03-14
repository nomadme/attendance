const Venue = require('../models/Venue')

// @desc    Get all venues
// @route   Get /v1/venues
// @access  Public
exports.getVenues = async (req, res, next) => {
  try {
    const venues = await Venue.find()
    res.status(200).json({success: true, message: 'Listing all venues', data: venues})
  } catch (e) {
    res.status(400).json({success: false, message: e.message, data: []})
  }

}

// @desc    Get single venue
// @route   Get /v1/venues/:id
// @access  Public
exports.getVenue = async (req, res, next) => {
  try {
    const venue = await Venue.findById(req.params.id)
    if (!venue) return res.status(400).json({success: false, message: 'venue does not exist', data: []})

    res.status(200).json({success: true, message: `Listing venue id: ${req.params.id}`, data: venue})
  } catch (e) {
    res.status(400).json({success: false, message: e.message, data: []})
  }

}

// @desc    Create venue
// @route   POST /v1/venues
// @access  Private
exports.createVenue = async (req, res, next) => {
  console.log(req.body)
  try {
    const venue = await Venue.create(req.body)
    res.status(201).json({success: true, message: 'Created venue', data: venue})
  } catch (e) {
    res.status(400).json({success: false, message: e.message, data: req.body})
  }
}

// @desc    Update venue
// @route   PUT /v1/venues/:id
// @access  Private
exports.updateVenue = async (req, res, next) => {
  // try {
  //   const venue = await Venue.updateOne()
  // }
  res.status(200).json({success: true, message: `Updating venue id: ${req.params.id}`, data: []})
}

// @desc    Delete venue
// @route   DELETE /v1/venues/:id
// @access  Private
exports.deleteVenue = (req, res, next) => {
  res.status(200).json({success: true, message: `Deleting venue id: ${req.params.id}`, data: []})
}
