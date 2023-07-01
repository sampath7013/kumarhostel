import React from 'react';

function Login() {
  const handleLogin = () => {
    // Add login logic here
    // This function will be called when the login button is clicked
  };

  return (
    <div className='flex-col ml-96 mt-28 rounded-3xl shadow-2xl p-10 mr-72 bg-white'>
      <h2 className='font-bold text-xl'>Login</h2>
      <form onSubmit={handleLogin} className='flex-col'>
        <div className='mt-2'>
            <label htmlFor="username" className='font-bold text-xl'>Username:</label>
            <input type="text" id="username" className='h-8 ml-2 mt-3 rounded-xl text-center border-2 p-2 shadow-lg focus:outline border-red-800 w-80' placeholder='Jon Doe'/>
        </div>
        <div className='mt-2 mb-2'>
            <label htmlFor="password" className='font-bold text-xl'>Password:</label>
            <input type="password" id="password" className='h-8 ml-2 mt-3 rounded-xl text-center border-2 p-2 shadow-lg focus:outline border-red-800 w-80'/>
        </div>
        <button type="submit" className='transition-all duration-1000 mt-3 ml-2 font-bold hover:translate-x-10 text-green-700 px-4 py-2 bg-transparent border border-green-700 rounded-lg hover:bg-green-700 hover:text-white'>Login</button>
      </form>
    </div>
  );
}

export default Login;
