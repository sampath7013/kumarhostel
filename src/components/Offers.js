import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css';

function Offers() {
  const offers = [
    { id: 1, title: '25% off', description: 'This Offer applies only if you are booking for first time' },
    { id: 2, title: '10% Off', description: 'if you are RuPay card holder' },
    { id: 3, title: '5% Off', description: 'if you are HDFC card holder' },
  ];

  const handleRedeem = (offerId) => {
    console.log(`Redeeming offer ${offerId}`);
    // Add your redeeming code here
  };

  return (
    <div className='offers-container'>
      <div className='offers-heading'>
        <h1 className='offers-title'>Hurry up! Offers are expiring soon</h1>
      </div>
      <div className='offers-grid'>
        {offers.map((offer) => (
          <div key={offer.id} className='offer-card'>
            <h2 className='offer-title'>{offer.title}</h2>
            <p className='offer-description'>{offer.description}</p>
            <div className='offer-action'>
              <button
                onClick={() => handleRedeem(offer.id)}
                className='offer-redeem-button'
              >
                <Link to='/booking'>Redeem Now >>></Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;

