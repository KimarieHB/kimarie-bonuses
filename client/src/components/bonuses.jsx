import React from 'react';
import ReactDOM from 'react-dom';

const Bonuses = (props) => {
  let bonusTitle;
  if (props.bonus && props.bonus.bonus_info.length === 1) {
    bonusTitle = <h3>Bonus</h3>;
  } else {
    bonusTitle = <h3>Bonuses</h3>;
  }

  // const bonusItems = props.bonus.bonus_info;

  return (
    <div className='bonus-tier'>
      <div className='bonus-title'>
        {bonusTitle}
      </div>
      <div className='bonus-item-cover'>
        <span>
          <img src={props.bonus.cover} alt='Awesome Bonus Sountrack'></img>
        </span>

      </div>
    </div>
  );
}

export default Bonuses;
