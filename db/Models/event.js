const mongoose = require('mongoose');

let EventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true
  },
  eventCategory: {
    type: String,
    required: true
  },
  eventLocation: {
    type: String,
    required: true
  },
  eventImageURLs: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Event', EventSchema);