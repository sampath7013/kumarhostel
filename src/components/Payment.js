import React from 'react'
import { Link } from 'react-router-dom';

function Payment() {
  return (
    <div className='ml-80 mt-14 bg-white rounded-xl shadow-2xl p-6 mr-40'>
        <form>
            <h1 className='font-bold text-3xl mb-2'>CheckOut</h1>
            <h2 className='font-bold text-2xl mb-2'>Payment Information</h2>
            <label className='font-bold text-xl'>Cardholder Name</label><br/>
            <input className='mt-3 text-center border-2 p-2 shadow-lg focus:outline w-96 border-red-800' type='text' placeholder='John Doe' /><br /><br />
            <label className='font-bold text-xl'>Card Number</label><br/>
            <input className='mb-3 mt-3 text-center border-2 p-2 shadow-lg focus:outline border-red-800' type='number' placeholder='934-438-326-423' /><br/>
            <label className='font-bold text-xl'>Card type</label>
            <select className='ml-4 bg-transparent border-b-2 border-rose-400 p-2 shadow-lg focus:outline-none'>
                <option value=''>Select Card type</option>
                <option value='Visa'>Visa</option>
                <option value='RuPay'>RuPay</option>
                <option value='MasterCard'>MasterCard</option>
            </select><br /><br />
            <hr/>
            <div className='flex mt-1'>
                <div>
                    <label className='font-bold text-xl mb-2'>Expiry</label>
                    <input className='ml-4 bg-transparent text-center border-b-2 p-2 shadow-lg focus:outline-none focus:border-rose-400' type='date' /><br /><br />
                </div>
                    <label className='font-bold text-xl mt-2 ml-2'>CVV</label>
                    <input className='mt-3 text-center border-2 p-2 shadow-lg focus:outline h-8 ml-3 w-52 border-red-800' type='password' placeholder='CVV' /><br /><br />
            </div>
            <button className='transition-all duration-1000 mt-3 ml-2 font-bold hover:translate-x-10 text-green-700 px-4 py-2 bg-transparent border border-green-700 rounded-lg hover:bg-green-700 hover:text-white'><Link to=''>Check Out>>></Link></button>
        </form>
    </div>
  )
}

export default Payment