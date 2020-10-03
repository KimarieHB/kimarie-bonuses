const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
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

// Server check
app.use('/test', (req, res) => {
  res.send('3-2-1 testing! Server is serving!');
})

// To render items in Bonus Tier (passed postman)
app.get('/bonuses/:bundleId', (req, res) => {
  let bundleId = req.params.bundleId;

  db.getBonuses(bundleId, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
})

// To render individual bonus upon selection
//req params vs req query...from event or url
app.get('/bonus/:name', (req, res) => {
  let selectTitle = 'dolorem nobis ut';
  Soundtrack.find({ bonus_info: {

  }});
})
