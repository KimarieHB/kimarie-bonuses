const mongoose = require('mongoose');
const Soundtrack = require('./models/soundtracks.js');

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

// Get bonus associated with bundle
const getBonuses = (bundleId, callback) => {
  Soundtrack.find({ bundle_id: bundleId }, (err, data) => {
    if (err) {
      err = new Error(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

// Get individual bonus item info
const getBonusItem = (title, callback) => {
  Soundtrack.find({ 'bonus_info.title': title }, (err, data) => {
    if (err) {
      err = new Error(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

// Get song to be played upon selection
const getSong = (trackName, callback) => {
  Soundtrack.findOne({ 'bonus_info.tracklist.name': trackName }, { 'bonus_info.tracklist.$': 1, _id: 0}, (err, data) => {
    if (err) {
      err = new Error(err);
      callback(err);
    } else {
      let song;
      for (let track of data.bonus_info[0].tracklist) {
        if (track.name === trackName) {
          song = {
            trackNo: track.track_number,
            name: track.name,
            songUrl: track.song_url
          }
        }
      }
      callback(null, song);
    }
  });
}

module.exports = {
  getBonuses,
  getBonusItem,
  getSong
}
