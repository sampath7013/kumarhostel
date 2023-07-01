import React from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const menuItems = [
    {
      name: 'Home',
      href: 'home',
    },
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Contact',
      href: 'contact',
    },
    {
      name: 'Offers',
      href: 'offers',
    },
  ];

  return (
    <div className='navbar-container'>
      <img className="navbar-logo" src={logo} alt='hostel' />
      <ul className='navbar-menu'>
        {menuItems.map((item) => (
          <li className='navbar-menu-item' key={item.name}>
            {item.name === 'Offers' || item.name === 'Contact' || item.name === 'About' ? (
              <Link to={item.href}>{item.name}</Link>
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
      <div className='navbar-buttons'>
        <button className='navbar-button'><Link to='/login'>Login</Link></button>
        <button className='navbar-button'><Link to='/signup'>SignUp</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
