import React from 'react';
import ReactDOM from 'react-dom';
import Bonuses from './components/bonuses.jsx';


const App = () => {
  return (
    <div>
      <Bonuses />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('bonuses'));
