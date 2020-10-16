import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BonusItem from './BonusItem.jsx';

class Bonuses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bonusTitle: 'Bonus',
      bundleNumber: null, //number
      bonus: { bonus_info: [{ cover: '' }] }, //object
      selectedSong: '', //string, representing url
    };

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

    $.get(`/bonus/${bundleId}`, (data) => {
      console.log('data',data);
      this.setState({ bonus: data[0] });
      if (data[0].bonus_info.length > 1) {
        this.setState({ bonusTitle: 'Bonuses' })
      }
    });
  }

  selectSong() {
    console.log('clicked');
  }

  render() {

    return (
      <div className='bonus-tier'>
        <div className='bonus-title'>
          <h2>{this.state.bonusTitle}</h2>
        </div>
        <div>
          <BonusItem bonus={this.state.bonus} selectSong={this.selectSong} />
        </div>
      </div>
    );
  }
}

export default Bonuses;
