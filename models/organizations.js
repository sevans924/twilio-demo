const { Schema, model } = require('mongoose');

const OrganizationSchema = new Schema({
    orgName: {
      type: String
    },
    primaryLanguage: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    phoneNumber: {
      type: String,
    },
    zipCodes: [],
    website: {
        type: String
    }
  });