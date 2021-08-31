var mongoose = require('mongoose');

var orgSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  countryCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  language:    [String],
  zip:         [String],
  website:     { type: String, required: false },
  description: { type: String, required: false },
  hours:       { type: String, required: false },
});

var organization = mongoose.model('organization', orgSchema);

module.exports = organization;