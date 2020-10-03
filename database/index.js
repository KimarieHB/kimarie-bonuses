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
  })
}

module.exports = {
  getBonuses
}
