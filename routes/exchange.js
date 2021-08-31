var MessagingResponse = require('twilio').twiml.MessagingResponse;
var twilio = require('twilio');
var express = require('express');
var router = express.Router();
var Exchange = require('../models/exchange');
var Organization = require('../models/organization');
var notifier = require('../lib/notifier');

// POST: /reservations
router.post('/', function (req, res) {
  var language;
  var zipCode;
  var from = req.body.From;

  if (req.body.language){
      language = req.body.language;
      var myExchange = Exchange.findOne({phoneNumber: from})
      .then(function(language){
        myExchange.u
      })
     }

  if (req.body.zip){
        zipCode = req.body.zip;
       }

  Property.findOne({ _id: propertyId })
  .then(function (property) {
    var reservation = new Reservation({
      message: req.body.message,
      property: propertyId,
      guest: user.id
    });

    return reservation.save();
  })
  .then(function () {
    notifier.sendNotification();
    res.redirect('/properties');
  })
  .catch(function(err) {
    console.log(err);
  });
});