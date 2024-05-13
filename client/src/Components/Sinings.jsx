import React, { useState } from 'react';
import './sinings.css'; // Import the CSS file

const LoginSignupForm = () => {
  const [activeForm, setActiveForm] = useState('login');

  const handleToggleForm = () => {
    setActiveForm(activeForm === 'login' ? 'signup' : 'login');
  };

  return (
    <section className={`wrapper ${activeForm === 'login' ? '' : 'active'}`}>
      <div className="form signup">
        <header onClick={() => setActiveForm('login')}>Signup</header>
        <form action="#">
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup"/>
        </form>
      </div>

      <div className="form login">
        <header  onClick={() => setActiveForm('signup')} >Login</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};

export default LoginSignupForm;



