import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Bonuses from './components/bonuses.jsx';


class App extends React.Component {
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

    return (
      <div>
        <Bonuses bonus={this.state.bonus} selectSong={this.selectSong} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('bonuses'));
