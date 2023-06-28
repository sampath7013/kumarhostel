import React from 'react'
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const menuItems=[{
        name:"Home",
        href:"home",
    },{
        name:"About",
        href:'about',
    },{
        name:'Contact',
        href:'contact'
    },{
        name:'Offers',
        href:'offers',
    }];
  return (
    <div className='flex justify-between p-5 items-center bg-purple-950'>
        <img className="w-30 h-20 rounded-md"src={logo} alt='hostel'/>
        <ul className='flex gap-4 bg-slate-400 px-10 py-3 items-center rounded-xl'>
            {menuItems.map((item)=>(
                <li className='font-bold hover:text-white  cursor-pointer'key={item.name}>
                    {item.name}
                </li>
            ))}
        </ul>
        <button className='bg-red-600 rounded-lg w-20 h-10  text-white hover:text-red-500 border-2 hover:bg-white '>Login</button>
    </div>
  )
}

export default Navbar