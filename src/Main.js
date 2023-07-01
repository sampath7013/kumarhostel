import React from 'react'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
function Main() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Products/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Main