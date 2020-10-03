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

<<<<<<< HEAD
// Server check
=======
// Server connection check
>>>>>>> a9e57af9313787f5f4748cfd445bfe7a270a757e
app.use('/test', (req, res) => {
  res.send('3-2-1 testing! Server is serving!');
})

// To render items in Bonus Tier (passed postman)
app.get('/bonus/:bundleId', (req, res) => {
  let bundleId = req.params.bundleId;

  db.getBonuses(bundleId, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
})

// To render individual bonus upon click selection
// query = /bonus-title?title=word+word+word
app.get('/bonus-title', (req, res) => {
  //let selectedTitle = req.query.title;
  let selectTitle = 'id quia corporis';

  db.getBonusItem(selectTitle, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
})

// To set up selected track to play
// query = /bonus-track?name=word+word+word
app.get('/bonus-track', (req, res) => {
  let trackName = req.query.name;
  console.log(trackName);
  //let trackName = 'optio omnis nisi';

  db.getSong(trackName, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
})
