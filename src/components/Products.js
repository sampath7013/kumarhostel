import React from 'react'
import hostel1 from '../Images/hostel1.jpg'
import hostel2 from '../Images/hostel2.jpg'
import hostel3 from '../Images/hostel3.jpg'
import { Link } from 'react-router-dom';

function Products() {
    const images = [
        hostel1,
        hostel2,
        hostel3
      ];
  return (
    <div className='flex flex-col mt-16'>
        <div className='items-center flex flex-col gap-3 '>
            <h1 className='text-4xl'>Explore</h1>
            <h3>Our Hostels</h3>
        </div>
        <div className='grid grid-cols-3 ml-16 mt-14'>
            {images.map((image)=>{
                return <div className='relative'>
                    <img src={image} className='transition-all duration-500 w-80 h-60 rounded-md cursor-pointer hover:scale-110' alt='hostel'/>
                    <button className='absolute bottom-8 font-bold bg-orange-400 left-4 p-2 rounded-md  hover:bg-white'><Link to='/booking'>Book now>>></Link></button>
                </div>
            })}
        </div>
    </div>
  )
}

export default Products