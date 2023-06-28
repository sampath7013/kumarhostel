import React from 'react'
import map from '../Images/maps.jpg'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
function Footer() {
  return (
    <div className='flex mt-16  justify-between bg-slate-500 w-full' >
        <img className='w-96 p-5 rounded-full ml-32'src={map}  alt='Google maps'/>
        <div className='flex flex-col gap-4 mr-80 py-20'>
            <h1 className='font-semibold' >Follow Us</h1>
            <div className='flex gap-4'>
                <p><BsInstagram/></p>
                <p><BsTwitter/></p>
                <p><AiFillFacebook/></p>
            </div>
        </div>
    </div>
  )
}

export default Footer