// components/SignupForm.js
import React, { useContext, useState } from 'react';
import './SignupForm.css'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();


  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label className='font-bold text-xl'>Username : </label>
        <input
          className='mt-5 text-center border-2 p-2 shadow-lg focus:outline border-red-800 h-6 w-64 rounded-lg'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br></br>
        <label className='font-bold text-xl'>Email : </label>
        <input
          className='mt-5 text-center border-2 p-2 shadow-lg focus:outline border-red-800 h-6 w-64 rounded-lg'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br></br>
        <label className='font-bold text-xl'>Password : </label>
        <input
          className='mt-5 text-center border-2 p-2 shadow-lg focus:outline border-red-800 h-6 w-64 rounded-lg'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        <button type="submit" className='transition-all duration-1000 mt-5 ml-2 font-bold hover:translate-x-10 text-green-700 px-4 py-2 bg-transparent border border-green-700 rounded-lg hover:bg-green-700 hover:text-white'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;

