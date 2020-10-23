const express = require('express');
const app = express();
const router = express.Router();
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');

let port = 3031;

app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static('client/dist'));

// Port/connection verification
app.listen(port, () => {
  console.log(`Successful connection! Listening at port ${port}`);
});

// Server connection check
app.use('/test', (req, res) => {
  res.send('3-2-1 testing! Server is serving!');
});

//Re-write to handle if the number is in range
app.get('/:id', (req, res) => {
  if (req.params.id > 100 || req.params.id < 1) {
    let errorMessage = 'Out of range error! Please choose a number 1 - 100.'
    res.send(errorMessage);

  } else {
      res.sendFile('/Users/kimmybeee/Desktop/kimarie-bonuses/client/dist/index.html', (err) => {
      if (err) {
        res.send(err);
      } else {
        console.log('HTML re-served');
      }
    });
  }
});

//To render items in Bonus Tier
app.get('/bonus/:id', (req, res) => {
  let bundleId = req.params.id;
  console.log(bundleId);

  db.getBonuses(bundleId, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
});

// To render individual bonus upon click selection
app.get('/bonus-title', (req, res) => {
  let selectedTitle = req.query.title;

  db.getBonusItem(selectedTitle, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
});

// To set up selected track to play
app.get('/bonus-track', (req, res) => {
  let trackName = req.query.song;

  db.getSong(trackName, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
});
