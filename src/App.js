import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Bookings from './components/bookings';
import Payment from './components/Payment';
import Main from './Main';
import Offers from './components/Offers';
import Contactinfo from './components/Contactinfo';
import About from './components/About';
import Login from './components/Login';
import SignupPage from './components/SignupPage';
import Feedbacksubmission from './components/Feedbacksubmission';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/feedbacksubmission' element={<Feedbacksubmission/>}/>
         <Route path='/signup' element={<SignupPage/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contactinfo/>}/>
         <Route path='/offers' element={<Offers/>}/>
         <Route path='/payment' element={<Payment/>}/>
         <Route path='/booking' element={<Bookings/>} />
         <Route path='/offers' element={<Offers/>} />
         <Route path='/' element={<Main/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
