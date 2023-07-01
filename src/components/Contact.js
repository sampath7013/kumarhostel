import React from 'react'
import contact from '../Images/contact.jpg';
function Contact() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col items-center mt-16 mb-10'>
            <h1 className='font-bold text-4xl mb-3'>Send us your Feedback</h1>
            <h3>Get in touch with us</h3>
        </div>
        <div className='flex items-center gap-28'>
            <img className="rounded-3xl ml-40 max-h-96 object-contain"src={contact} alt='contact'/>
            <form className='bg-white shadow-2xl rounded-3xl p-10'>
                <label className='font-bold text-rose-400 text-3xl'>Name</label>
                <input className='ml-16 bg-transparent text-center border-b-2 p-2 shadow-lg' type='text' placeholder='Enter the name'></input><br/><br/>
                <label className='font-bold text-rose-400 text-3xl'>Email</label>
                <input className='ml-16 bg-transparent text-center border-b-2 p-2 shadow-lg' type='email' placeholder='enter the email'></input><br/><br/>
                <label className='font-bold text-rose-400 text-3xl'>Subject</label>
                <input className='ml-16 bg-transparent text-center border-b-2 p-2 shadow-lg' type='text' placeholder='Enter the feedback'></input><br/><br/>
                <button className='transition-all duration-1000 mt-8 font-bold hover:translate-x-10 text-green-700 px-2'>Send Feedback>>></button>
            </form>
        </div>
       
    </div>
  )
}

export default Contact