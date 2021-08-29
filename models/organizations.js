var mongoose = require('mongoose');

var orgSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  countryCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  languages:   [String],
  website:     { type: String, required: false },
  description: { type: String, required: false },
  hours:       { type: String, required: false },
});

var organization = mongoose.model('property', propertySchema);

module.exports = organization;