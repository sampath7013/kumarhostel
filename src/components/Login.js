import React, { useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className='mt-24 ml-72 bg-white rounded-3xl shadow-2xl mr-96 p-7'>
      <h1 className="font-bold text-3xl mb-2">Sign In</h1>
      <form onSubmit={handleSignin}>
        <label className="font-bold text-xl">Email:</label>
        <input
          className="mt-5 text-center border-2 p-2 shadow-lg focus:outline border-red-800 h-6 w-64 rounded-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label className="font-bold text-xl">Password:</label>
        <input
          className="mt-5 text-center border-2 p-2 shadow-lg focus:outline border-red-800 h-6 w-64 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button
          type="submit"
          className="transition-all duration-1000 mt-5 ml-2 font-bold hover:translate-x-10 text-green-700 px-2 py-2 bg-transparent border border-green-700 rounded-lg hover:bg-green-700 hover:text-white"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
