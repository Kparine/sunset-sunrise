import React from 'react';
import './App.css';
import Header from './Components/header';
import Location from './Components/location';

export default function App() {
  return (
    <div className='App'>
      <div className='header-wrapper'>
        <Header />
        <Location />
      </div>
    </div>
  );
}
