import React from 'react';
import $ from 'jquery';
import BonusItems from './BonusItems.jsx';

class Bonuses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bonusTitle: 'Bonus',
      bundleNumber: null, //number
      bonus: { bonus_info: [{ cover: '' }] }, //object
      selectedSong: '', //string, representing url
    };

    this.selectAlbum = this.selectAlbum.bind(this);
    this.selectSong = this.selectSong.bind(this);
  }

  componentDidMount() {
    let bundleId = window.location.pathname;

    if (bundleId === '/') {
      bundleId = 1;
    } else {
      bundleId = parseInt(bundleId.slice(1));
    }
    console.log('bundleId', bundleId);

    //sent to route with number in range
    $.get(`/bonus/${bundleId}`, (data) => {
      console.log('React params out:', `/bonus/${bundleId}`);
      console.log('React get fired');
      console.log('data', data);

      if (data[0].bonus_info.length > 1) {
        this.setState({ bonusTitle: 'Bonuses' });
      }
      this.setState({ bonus: data[0] });
      this.setState({ bundleNumber: bundleId })
    });
  }

  selectAlbum(event) {
    console.log('Album clicked!');
  }

  selectSong(event) {
    console.log('Song clicked!');
  }

  render() {

    return (
      <div className='bonus-tier'>
        <div className='bonus-title'>
          <h2>{this.state.bonusTitle}</h2>
        </div>
        <div>
          <BonusItems bonus={this.state.bonus} selectAlbum={this.selectAlbum} selectSong={this.selectSong} />
        </div>
      </div>
    );
  }
}

export default Bonuses;
