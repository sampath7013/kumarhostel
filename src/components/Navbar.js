import React, { useContext } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AuthContext} from '../Store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Navbar() {
  const {currentUser}=useContext(AuthContext);
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
        {!currentUser ? (<div><button className='navbar-button'><Link to='/login'>Sign In</Link></button>
        <button className='navbar-button'><Link to='/signup'>SignUp</Link></button></div>):(
          <button className='navbar-button' onClick={()=>{signOut(auth)}}>SignOut</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
