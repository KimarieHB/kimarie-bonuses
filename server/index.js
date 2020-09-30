const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
const mongoose = require('mongoose');
const Soundtrack = require('../database/models/soundtracks.js');
const db = require('../database/index.js');
let port = 3031;

if (port === null || port === '') {
  port = 3031
}

mongoose.connect('mongodb://localhost/bonuses', {
  autoIndex: false,
  dbName: 'bonuses',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => {
  console.log('Connection to MongoDB successful!');
}).catch( (err) => {
  console.log('DB connection error:', err);
});

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

app.get('/bonuses/:bundleId', (req, res) => {
  let bundleId = req.params.bundleId;

  Soundtrack.find({ bundle_id: bundleId }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
})