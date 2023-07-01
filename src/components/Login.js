import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const handleLogin = () => {
    // Add login logic here
    // This function will be called when the login button is clicked
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <h2 className='font-bold text-xl'>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label htmlFor="username" className='font-bold text-xl'>Username:</label>
            <input type="text" id="username" className='input-field' placeholder='John Doe' />
          </div>
          <div className='form-group'>
            <label htmlFor="password" className='font-bold text-xl'>Password:</label>
            <input type="password" id="password" className='input-field' />
          </div>
          <button type="submit" className='login-button'>Login</button>
          <p className='signup-text'>Do not have an account, please <Link to='/signup' className='signup-link'>signup>>></Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
