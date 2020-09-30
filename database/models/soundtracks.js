const mongoose = require('mongoose');

const soundSchema = new mongoose.Schema({
  bundle_id: { type: Number, unique: true },
  bonus_info: [
    {
      title: String,
      composer_performer: String,
      cover: String,
      tracklist: [
        {
          track_number: String,
          name: String,
          song: String
        }
      ]
    }
  ]
});

const Soundtrack = mongoose.model('Soundtrack', soundSchema);

module.exports = Soundtrack;