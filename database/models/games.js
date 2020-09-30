const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  bundle_id: { type: Number, unique: true },
  game_info: [
    {
      title: String,
      publisher: String
    }
  ]
})

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;