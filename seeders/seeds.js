const mongoose = require('mongoose');
const db = require('../models/organization');

mongoose.connect('mongodb://localhost/organization', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const organizationSeed = [
    {
      name: 'Org #1',
      countryCode: '+1',
      phoneNumber: '1234567',
      language: ['English', 'Espanol'],
      zip: ['20331', '20832', '30833'],
      website: 'www.google.com',
      description: 'We are org #1',
      hours: 'MWF 6AM - 11PM'    
    }, 
    {
        name: 'Org #2',
        countryCode: '+1',
        phoneNumber: '1234568',
        language: ['English', 'Espanol', 'Urdu'],
        zip: ['20331', '20832', '30833'],
        website: 'www.google.com',
        description: 'We are org #2',
        hours: 'MWFSS 6AM - 11PM'    
      }, 
      {
        name: 'Org #3',
        countryCode: '+1',
        phoneNumber: '1234569',
        language: ['English', 'Hindi', 'Urdu'],
        zip: ['20331', '20832', '30833', '45678', '60659'],
        website: 'www.google.com',
        description: 'We are org #3',
        hours: 'M 6AM - 11PM'    
      }, 
      {
        name: 'Org #4',
        countryCode: '+1',
        phoneNumber: '1234560',
        language: ['English'],
        zip: ['20331', '20832', '30833'],
        website: 'www.google.com',
        description: 'We are org #4',
        hours: 'MTWThF 6AM - 11PM'    
      }, 
]

db.Organization.deleteMany({})
  .then(() => db.Organization.collection.insertMany(organizationSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });