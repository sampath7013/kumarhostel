import React from 'react';
import { Link } from 'react-router-dom';
import './Bookings.css';

function Bookings() {
  return (
    <div className='bookings-container'>
      <form>
        <label className='font-bold text-xl'>Your Name</label><br/>
        <input className='mt-3 text-center border-2 p-2 shadow-lg focus:outline w-96 border-red-800' type='text' placeholder='John Doe' /><br /><br />

        <label className='font-bold text-xl'>Your Email</label><br/>
        <input className='mt-3 text-center border-2 p-2 shadow-lg focus:outline w-96 border-red-800' type='email' placeholder='sampath123@gmail.com' /><br /><br />

        <label className='font-bold text-xl'>Your Phone</label><br/>
        <input className='mt-3 text-center border-2 p-2 shadow-lg focus:outline w-96 border-red-800' type='text' placeholder='934-438-326-423' /><br /><br />
        <hr />

        <div className='mt-2 mb-2 flex'>
          <div className='mr-2'>
            <label className='font-bold text-xl'>Number of persons</label><br/>
            <input className='mt-3 text-center border-2 p-2 shadow-lg focus:outline border-red-800' type='number' placeholder='0' />
          </div>
          <div>
            <label className='font-bold text-xl'>Bed number</label><br/>
            <input className='mt-3 text-center border-2 p-2 shadow-lg focus:outline border-red-800' type='number' placeholder='0' />
          </div>
        </div>

        <label className='font-bold text-xl'>Choose room type</label>
        <select className='ml-4 bg-transparent border-b-2 border-rose-400 p-2 shadow-lg focus:outline-none'>
          <option value='Ac'>Ac</option>
          <option value='Non Ac'>Non Ac</option>
        </select><br /><br />

        <button className='transition-all duration-1000 mt-3 ml-2 font-bold hover:translate-x-10 text-green-700 px-2 py-2 bg-transparent border border-green-700 rounded-lg hover:bg-green-700 hover:text-white'>
          <Link to='/payment'>Book now >></Link>
        </button>
      </form>
    </div>
  );
}

export default Bookings;
