import React from 'react';
import { Link } from 'react-router-dom';

function Offers() {
  const offers = [
    { id: 1, title: '25% off', description: 'This Offer applies only if you are booking for first time' },
    { id: 2, title: '10% Off', description: 'if you are RuPay card holder' },
    { id: 3, title: '5% Off', description: 'if you are HDFC card holder' },
  ];

  const handleRedeem = (offerId) => {
    // Handle redeeming logic for the offer with the given offerId
    console.log(`Redeeming offer ${offerId}`);
    // Add your redeeming code here
  };

  return (
    <div className='flex flex-col mt-16'>
      <div className='items-center flex flex-col gap-3 '>
        <h1 className='font-bold text-xl'>Hurry up! Offers are expiring soon</h1>
      </div>
      <div className='grid grid-cols-3 ml-16 mt-14'>
        {offers.map((offer) => (
          <div key={offer.id} className='relative flex-col bg-white rounded-3xl shadow-2xl mr-32 pb-5 pt-4 pl-24'>
            <h2 className='font-bold text-xl'>{offer.title}</h2>
            <p className='italic'>{offer.description}</p>
            <div className='mt-4'>
              <button
                onClick={() => handleRedeem(offer.id)}
                className='font-bold bg-orange-400 p-2 rounded-md hover:bg-white'
              >
                <Link to='/booking'>Redeem Now>>></Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
