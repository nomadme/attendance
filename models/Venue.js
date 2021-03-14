const mongoose = require('mongoose')

const VenueSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Enter name'], unique: true, trim: true},
  slug: String,
  description: {
    type: String,
    required: [true, 'Description of the venue'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Please enter valid url with HTTP or HTTPS'
    ]
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be longer than 20 characters']
  },
  email: {
    type: String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add valid email']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  features: {
    // array of strings
    type: [String],
    required: true
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating can not be at more than 10'],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg'
  }
}, {timestamps: true})

module.exports = mongoose.model('Venue', VenueSchema)
