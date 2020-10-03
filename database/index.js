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
  Soundtrack.find({ "bonus_info.title": `${title}` }, (err, data) => {
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
  Soundtrack.find({ "bonus_info.tracklist.name": `${trackName}` }, (err, data) => {
    if (err) {
      err = new Error(err);
      callback(err);
    } else {
      console.log(data)
      callback(null, data);
    }
  });
}

module.exports = {
  getBonuses,
  getBonusItem,
  getSong
}
