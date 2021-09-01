const { Schema, model } = require('mongoose');

var orgSchema = new Schema({
  name: { type: String, required: true },
  countryCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  language: [],
  zip: [],
  website: { type: String, required: false },
  description: { type: String, required: false },
  hours: { type: String, required: false },
});

var organization = model('organization', orgSchema);

module.exports = organization;
