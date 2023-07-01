import React from 'react'
function Contactinfo() {
    const hostelName = 'Apna Hostel';
    const address = '43 ganesh Street, Hyderabad, India';
    const phoneNumber = '+1 923-456-7890';
    const email = 'apnahostel@myhostel.com';
  
    return (
      <div className='ml-96 mt-32 bg-white rounded-3xl shadow-2xl p-5 mr-96'> 
        <h2 className='font-bold text-xl'>Contact Details</h2>
        <p className='mt-2'>Hostel Name: {hostelName}</p>
        <p className='mt-2'>Address: {address}</p>
        <p className='mt-2'>Phone Number: {phoneNumber}</p>
        <p className='mt-2'>Email: {email}</p>
      </div>
    );
}

export default Contactinfo