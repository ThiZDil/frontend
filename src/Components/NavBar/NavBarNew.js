import React, { useState } from 'react';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png'
import './NavBar.css'
import { Link } from 'react-router-dom';
const UsenavBar = () => {
  const [menu,setMenu]= useState("Shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''></img>
        <p>Shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Shop")}}><Link to='/'>Shop</Link> {menu=="Shop"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setMenu("Mens")}}> <Link to='/men'>Mens</Link>{menu=="Mens"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setMenu("Womens")}}><Link to='/women'>Womens</Link> {menu=="Womens"?<hr></hr>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kid'>kids</Link> {menu=="kids"?<hr></hr>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt=''/>
        <div className='nav-cart-count'>0
        </div>
      </div>
    </div>
  );
};

export default UsenavBar;
