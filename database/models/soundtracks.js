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
<<<<<<< HEAD
          song_url: String
=======
          song_url: String,
>>>>>>> e7eb9707c712fccf780053f6d575e8cf13f9115d
        }
      ]
    }
  ]
});

const Soundtrack = mongoose.model('Soundtrack', soundSchema);

module.exports = Soundtrack;
