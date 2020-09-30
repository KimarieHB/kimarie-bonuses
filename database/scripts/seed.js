const mongoose = require('mongoose');
const faker = require('faker');
const Soundtrack = require('../models/soundtracks.js');
//const GameModel = require('../models/games.js');

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

const soundtrackSeeds = () => {

  let albums  = [];

  for (let i = 1; i <= 101; i++) { //101

    let songs = [];
    let listLength = Math.floor(Math.random() * 13) + 9;

      for (let j = 0; j < listLength; j++) {
        let number = j.toString();

        if (j < 10) {
          number = number.padStart(2, "0");
        }

        let song = {
          track_number: number,
          name: faker.lorem.words(),
          song: faker.internet.url()
        }
        songs.push(song);
      }

    let album = {
      bundle_id: i,
      bonus_info: [
        {
          title: faker.lorem.words(),
          composer_performer: faker.name.findName(),
          tracklist: songs,
          cover: faker.image.animals()
        }
      ]
    };
    albums.push(album);
  }

  Soundtrack.insertMany(albums)
  .then((res) => {
    console.log('Database seeding complete!');
    mongoose.connection.close();
  }).catch((err) => {
    console.log('seed error:', err);
    mongoose.connection.close();
  });

}

soundtrackSeeds();