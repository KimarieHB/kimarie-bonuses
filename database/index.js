const mongoose = require('mongoose');
const Soundtrack = require('./models/soundtracks.js');

mongoose.connect('mongodb://localhost/bonuses', {
  autoIndex: false,
  dbName: 'bonuses',
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
<<<<<<< HEAD
  Soundtrack.find({ 'bonus_info.title': title }, (err, data) => {
=======
  Soundtrack.find({ 'bonus_info.title': title }, {'bonus_info.$': 1, _id: 0}, (err, data) => {
>>>>>>> e7eb9707c712fccf780053f6d575e8cf13f9115d
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
<<<<<<< HEAD
  Soundtrack.findOne({ 'bonus_info.tracklist.name': trackName }, { 'bonus_info.tracklist.$': 1, _id: 0}, (err, data) => {
=======
  Soundtrack.findOne({ 'bonus_info.tracklist.name': trackName}, {'bonus_info.tracklist.$': 1, _id: 0}, (err, data) => {
>>>>>>> e7eb9707c712fccf780053f6d575e8cf13f9115d
    if (err) {
      err = new Error(err);
      callback(err);
    } else {
      let song;
      console.log(data);
      for (let track of data.bonus_info[0].tracklist) {
        if (track.name === trackName) {
          song = {
            trackNo: track.track_number,
            name: track.name,
<<<<<<< HEAD
            songUrl: track.song_url
=======
            songUrl: track.song_url,
>>>>>>> e7eb9707c712fccf780053f6d575e8cf13f9115d
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
  getSong,
}
