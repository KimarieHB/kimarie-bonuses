import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BonusItem from './BonusItem.jsx';

class Bonuses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundleNumber: 1, //number
      bonus: { bonus_info: [{ cover: '' }] }, //object
      selectedSong: '', //string, representing url
    };

    this.selectSong = this.selectSong.bind(this);
  }

  componentDidMount() {
    console.log('mounted')
    $.get(`/bonus/${this.state.bundleNumber}`, (data) => {
      console.log(data);
      this.setState({ bonus: data });
    });
  }

  selectSong() {
    console.log('clicked');
  }

  render() {
    let bonusTitle;
    if (this.state.bonus && this.state.bonus.bonus_info.length === 1) {
      bonusTitle = <h3>Bonus</h3>;
    } else {
      bonusTitle = <h3>Bonuses</h3>;
    }

    return (
      <div className='bonus-tier'>
        <div className='bonus-title'>
          {bonusTitle}
        </div>
        <div>
          <BonusItem bonus={this.state.bonus} selectSong={this.selectSong} />
        </div>
      </div>
    );
  }
}
  // const bonusItems = props.bonus.bonus_info;
export default Bonuses;
