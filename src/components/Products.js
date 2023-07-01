import React from 'react';
import hostel1 from '../Images/hostel1.jpg';
import hostel2 from '../Images/hostel2.jpg';
import hostel3 from '../Images/hostel3.jpg';
import { Link } from 'react-router-dom';
import './Products.css'

function Products() {
  const images = [hostel1, hostel2, hostel3];

  return (
    <div className='products-container'>
      <div className='products-heading'>
        <h1 className='products-title'>Explore</h1>
        <h3 className='products-subtitle'>Our Hostels</h3>
      </div>
      <div className='products-grid'>
        {images.map((image) => (
          <div className='products-item' key={image}>
            <img
              src={image}
              className='products-image'
              alt='hostel'
            />
            <button className='products-button'>
              <Link to='/booking'>Book now >>></Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
