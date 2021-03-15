const Venue = require('../models/Venue')
const ErrorResponse = require('../utilities/errorResponse')
const asyncHandler = require('../middleware/async')

// @desc    Get all venues
// @route   Get /v1/venues
// @access  Public
exports.getVenues = asyncHandler(async (req, res, next) => {
    const venues = await Venue.find()
    res.status(200).json({success: true, count: venues.length, data: venues})
})

// @desc    Get single venue
// @route   Get /v1/venues/:id
// @access  Public
exports.getVenue = asyncHandler(async (req, res, next) => {
  const venue = await Venue.findById(req.params.id)

  if (!venue) return next(new ErrorResponse('Venue does not exist', 404))

  res.status(200).json({success: true, message: `Listing venue id: ${req.params.id}`, data: venue})
})

// @desc    Create venue
// @route   POST /v1/venues
// @access  Private
exports.createVenue = asyncHandler(async (req, res, next) => {
  const venue = await Venue.create(req.body)
  res.status(201).json({success: true, message: 'Created venue', data: venue})
})

// @desc    Update venue
// @route   PUT /v1/venues/:id
// @access  Private
exports.updateVenue = asyncHandler(async (req, res, next) => {
  const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  if(!venue) return next(new ErrorResponse('id provided, does not exist', 400))

  res.status(200).json({success: true, message: `Updated venue id: ${req.params.id}`, data: venue})
})

// @desc    Delete venue
// @route   DELETE /v1/venues/:id
// @access  Private
exports.deleteVenue = asyncHandler(async (req, res, next) => {
  const venue = await Venue.findByIdAndDelete(req.params.id)

  if(!venue) return next(new ErrorResponse('id provided, does not exist', 400))

  res.status(200).json({success: true, message: `Deleted venue id: ${req.params.id}`})
})
