import React from 'react';

const BonusItems = (props) => {
  const albums = props.bonus.bonus_info;

  const bonusAlbums = albums.map((album, index) => {
    return (
      <div className='bonus-album' key={index}>
        <div className='bonus-item-cover' value={album.title} onClick={(event) => props.selectAlbum(event)}>
          <span>
            <img src={album.cover} alt='Awesome Bonus Sountrack'></img>
          </span>
        </div>
        <div className='bonus-item-title'>
          {`${album.title} Soundtrack`}
        </div>
      </div>
    );
  })

  return (
    <div className='bonus-items'>
      {bonusAlbums}
    </div>
  )
}

export default BonusItems;
//onAlbumClick={(event) => props.selectAlbum(event)}
