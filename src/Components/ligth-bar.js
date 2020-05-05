// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { SearchContext } from '../Contexts/searchContext';

const LightBar = () => {
  const { data } = useContext(SearchContext);

  if (!Object.keys(data).length) {
    return null;
  }

  const percentDay = () => {
    const totalSecondsInDay = 86400;
    const secondsOfDaylight = parseInt(data[1].day_length);

    const percent = Math.floor(((totalSecondsInDay - secondsOfDaylight) / totalSecondsInDay) * 100);
    return percent;
  };

  return (
    <div className='lightbar-content'>
      <div className='lightbar-item night' style={{ width: `${percentDay()}%`, backgroundImage: `linear-gradient(90deg, #020024 0%, #090979 ${percentDay() + 10}%, #00d4ff 100%)` }}>
        <div className='lightbar-title'>Night {`${percentDay()}%`}</div>
      </div>
      <div className='lightbar-item day' style={{ width: `${100 - percentDay()}%`, marginLeft: `${percentDay()}%`, backgroundImage: `linear-gradient(270deg, #020024 20%, #090979 ${percentDay()}%, #00d4ff 100%)` }}>
        <div className='lightbar-title' style={{ marginLeft: `30px`, color: `#000` }}>
          Daylight {`${100 - percentDay()}%`}
        </div>
      </div>
    </div>
  );
};

export default LightBar;
