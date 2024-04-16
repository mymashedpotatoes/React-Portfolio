import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='header-container'>
      {/* <h1 className='header'>Elizabeth Gaul</h1>
        <img className='catjam' src='./images/catjam.gif'></img>
        <img className='flipped' src='./images/flipped-catjam.gif'></img> */}
      <p className='img-container'>
        <img src="./images/catjam.gif"></img>
          Elizabeth Gaul
        <img src='./images/flipped-catjam.gif'></img>
      </p>
      <Navigation />
    </header>
  );
};

export default Header;