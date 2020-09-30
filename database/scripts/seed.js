const mongoose = require('mongoose');
const faker = require('faker');
const Soundtrack = require('../models/soundtracks.js');

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

let albums  = [];

const fakeSongList = () => {
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
  return songs;
}

for (let i = 1; i <= 10; i++) {
  let additionalBonus = Math.floor(Math.random() * Math.floor(100));

  let album = {
    bundle_id: i,
    bonus_info: [
      {
        title: faker.lorem.words(),
        composer_performer: faker.name.findName(),
        cover: faker.image.animals(),
        tracklist: fakeSongList()
      }
    ]
  };

  if (additionalBonus % 2 === 0) {
    album.bonus_info.push({
      title: faker.lorem.words(),
      composer_performer: faker.name.findName(),
      cover: faker.image.animals(),
      tracklist: fakeSongList(),
    });
  }

  albums.push(album);
}

Soundtrack.insertMany(albums)
.then((res) => {
  console.log(`Database seeding complete with ${res.length} entries!`);
  mongoose.connection.close();
}).catch((err) => {
  console.log('seed error:', err);
  mongoose.connection.close();
});