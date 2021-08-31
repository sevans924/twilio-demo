const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/organization', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require('./routes/organization.js'));
app.use(require('./routes/exchange.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});