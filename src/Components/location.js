// eslint-disable-next-line no-unused-vars
// @ts-check
import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../Contexts/searchContext';

const Location = (props) => {
  const { data } = useContext(SearchContext);
  console.log('data ******------>>>>>>', SearchContext);

  useEffect(() => {
    console.log('props ******------>>>>>>', props);

    console.log('data ******------>>>>>>', data);
  });

  return <div className='location-content'>Hello</div>;
};

export default Location;
