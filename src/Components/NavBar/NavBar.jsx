import React from 'react';
import logo from '../Assests/logo.png'
import './NavBar.css';

const navBar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <img src={logo} alt="hh"></img>
      <p>Shopper</p>
      </div>
    </div>
  );
};

export default navBar;
