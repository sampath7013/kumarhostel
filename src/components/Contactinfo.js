import React from 'react';
import './Contactinfo.css';

function Contactinfo() {
  const hostelName = 'Apna Hostel';
  const address = '43 Ganesh Street, Hyderabad, India';
  const phoneNumber = '+1 923-456-7890';
  const email = 'apnahostel@myhostel.com';

  return (
    <div className='contact-info-container'>
      <h2 className='font-bold text-xl'>Contact Details</h2>
      <p className='mt-2'>Hostel Name: {hostelName}</p>
      <p className='mt-2'>Address: {address}</p>
      <p className='mt-2'>Phone Number: {phoneNumber}</p>
      <p className='mt-2'>Email: {email}</p>
    </div>
  );
}

export default Contactinfo;
