var express = require('express');
var router = express.Router();
var Organization = require('../models/organization');
var Exchange = require('../models/exchange')
var notifier = require('../lib/notifier');

router.get('/', function (req, res){
  Organization.find({})
})