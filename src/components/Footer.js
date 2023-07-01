import React from 'react';
import map from '../Images/maps.jpg';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <img className='map-image' src={map} alt='Google maps' />
      <div className='social-media'>
        <h1 className='font-semibold'>Follow Us</h1>
        <div className='social-icons'>
          <p><BsInstagram /></p>
          <p><BsTwitter /></p>
          <p><AiFillFacebook /></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
