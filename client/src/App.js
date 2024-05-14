// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LoginSignupForm from './Components/Sinings';
import Home from './Landing Page/HomePage';
import ContactUs from './Landing Page/ContactUs';
import Services from './Landing Page/Services';
import AboutUs from './Landing Page/AboutUs';
import Pricing from './Landing Page/Pricing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import WorkerLogin from './Components/WorkerLogin';
import WorkerSignup from './Components/WorkerSignup';
import Employer from './Components/Employer';
import Cooks from './Components/Services/Cooks';


function App (){
  return (
    <Router>
      <Routes>
        <Route path="/j" element={<LoginSignupForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Signup/>} />
        <Route path="/workerlogin" element={<WorkerLogin/>} />
        <Route path="/workersignup" element={<WorkerSignup/>} />
        <Route path="/employerdash" element={<Employer/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/cooks" element={<Cooks/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/pricing" element={<Pricing/>} />
        
        {/* Add more routes as needed */}
        </Routes>
    </Router>
  );
};

export default App;
