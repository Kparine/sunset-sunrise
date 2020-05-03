// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Location = (props) => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <div className='location-content'>
      Location: {props.data[0].formatted_address}
      <div>Sunrise: {new Date(props.data[1].sunrise).toLocaleTimeString()}</div> <div>Sunset: {new Date(props.data[1].sunset).toLocaleTimeString()}</div>
    </div>
  );
};

export default Location;
