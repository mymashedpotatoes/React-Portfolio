import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <h1 className='header'>Elizabeth Gaul</h1>
      <Navigation />
    </header>
  );
};

export default Header;