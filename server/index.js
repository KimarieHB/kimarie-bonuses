const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
// const mongoose = require('mongoose');
const db = require('../database/index.js');
let port = 3031;

if (port === null || port === '') {
  port = 3031
}

// Port/connection verification
app.listen(port, () => {
  console.log(`Successful connection! Listening at port ${port}`);
})

app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

// Server test
app.use('/test', (req, res) => {
  res.send('3-2-1 testing! Server is serving!');
})
