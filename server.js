'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const messages = require('./routes/classifieds');

app.use('/classifieds',messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
