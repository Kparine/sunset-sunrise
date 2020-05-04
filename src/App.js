import React from 'react';
import './App.css';
import Header from './Components/header';
import Location from './Components/location';
import SearchContextProvider from './Contexts/searchContext';

const App = () => {
  return (
    <div className='App'>
      <SearchContextProvider>
        <div className='header-wrapper'>
          <Header />
          <div className='location-wrapper'>
            <Location />
          </div>
        </div>
      </SearchContextProvider>
    </div>
  );
};

export default App;
