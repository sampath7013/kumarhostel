import React from 'react';
import SignupForm from '../components/SignupForm';
import './SignupPage.css'
const SignupPage = () => {
  return (
    <div className='ml-96 mt-24 flex-col bg-white rounded-3xl shadow-2xl p-10 mr-96'>
      <h1 className='font-bold text-3xl mb-4'>Create an Account</h1>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
