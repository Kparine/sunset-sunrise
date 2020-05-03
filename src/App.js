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
          <Location />
        </div>
      </SearchContextProvider>
    </div>
  );
};

export default App;
