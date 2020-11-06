import React from 'react';
//just grab ajax from jquery (tree shaking for webpack)
import $ from 'jquery';
import BonusItems from './BonusItems.jsx';


class Bonuses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: false,
      bonusHeading: 'Bonus',
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

      if (bundleId < 1 || bundleId > 100) {
        this.setState({ showWarning : true });
      }
    }

    $.ajax({
      method: 'GET',
      url: `/bonus/${bundleId}`,
      crossDomain: true,
      error: (err) => {
        console.log(err);
      }
    })
    .done((data) => {
      console.log('Service get data', data);
      if (data[0]) {
        if (data[0].bonus_info.length > 1) {
          this.setState({ bonusHeading: 'Bonuses' });
        }
        this.setState({ bonus: data[0] });
        this.setState({ bundleNumber: bundleId });
      }
    })
  }

  selectAlbum(event) {
    console.log('Album clicked!');
  }

  selectSong(event) {
    console.log('Song clicked!');
  }

  render() {

    if (this.state.showWarning) {
      return (
        <div className='warning'>
          Out of range warning! Please choose bundle 1 - 100.
        </div>
      )
    } else {
      return (
        <div className='bonus-tier'>
          <div className='bonus-title'>
            <h2>{this.state.bonusHeading}</h2>
          </div>
          <div>
            <BonusItems bonus={this.state.bonus} selectAlbum={this.selectAlbum} selectSong={this.selectSong} />
          </div>
        </div>
      );
    }
  }
}

export default Bonuses;
