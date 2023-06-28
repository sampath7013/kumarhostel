import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './index.css';
function App() {
  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
