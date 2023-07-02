import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

function Payment() {
  return (
    <div className='payment-container'>
      <form>
        <h1 className='payment-title'>CheckOut</h1>
        <h2 className='payment-subtitle'>Payment Information</h2>
        <label className='payment-label'>Cardholder Name</label>
        <input className='payment-input' type='text' placeholder='John Doe' /><br></br>
        <label className='payment-label'>Card Number</label>
        <input className='payment-input' type='number' placeholder='934-438-326-423' /><br></br>
        <label className='payment-label'>Card type</label>
        <select className='payment-select'>
          <option value=''>Select Card type</option>
          <option value='Visa'>Visa</option>
          <option value='RuPay'>RuPay</option>
          <option value='MasterCard'>MasterCard</option>
        </select>
        <hr />
        <div className='payment-expiry'>
          <label className='payment-label'>Expiry</label>
          <input className='payment-input' type='date' />
        </div>
        <label className='payment-cvv'>CVV</label>
        <input className='payment-input' type='password' placeholder='CVV' />
        <br></br>
        <button className='transition-all duration-1000 mt-3 ml-2 font-bold hover:translate-x-10 text-green-700 px-2 py-2 bg-transparent border border-green-700 rounded-lg hover:bg-green-700 hover:text-white'>
          <Link to=''>Check Out >>></Link>
        </button>
      </form>
    </div>
  );
}

export default Payment;
