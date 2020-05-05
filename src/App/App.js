import React from 'react';
import './App.scss';
import DayLight from '../Components/daylight';
import Header from '../Components/header';
import Location from '../Components/location';
import LightBar from '../Components/ligth-bar';
import SearchContextProvider from '../Contexts/searchContext';

const App = () => {
  return (
    <div className='App'>
      <SearchContextProvider>
        <div className='header-wrapper'>
          <Header />
          <LightBar />
          <div className='location-wrapper'>
            <Location />
            <DayLight />
          </div>
        </div>
      </SearchContextProvider>
    </div>
  );
};

export default App;
