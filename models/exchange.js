var mongoose = require("mongoose");

var exchangeSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },  
  language:    { type: String, required: false },
  zip:         { type: String, required: false },
  date:        { type: Date, default: Date.now },
});

var exchange = mongoose.model("exchange", exchangeSchema);

module.exports = exchange;
