import React from 'react';
import './App.scss';
import Header from '../Components/header';
import Location from '../Components/location';
import Daylight from '../Components/daylight';
import SearchContextProvider from '../Contexts/searchContext';
// import Map from '../Components/map';

const App = () => {
  return (
    <div className='App'>
      <SearchContextProvider>
        <div className='header-wrapper'>
          <Header />
          <div className='location-wrapper'>
            <Location />
            <Daylight />
            <div>{/* <Map /> */}</div>
          </div>
        </div>
      </SearchContextProvider>
    </div>
  );
};

export default App;
