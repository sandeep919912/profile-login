import React from 'react';
import '../App.css';

const Login = () => {
  return (
    <div className="main">
        <div className='content-area4'>
             <div className="login-box">
        <h2>Signin to your<br />PopX account</h2>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>

        <form className="login-form">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email address" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />

          <button type="submit" disabled>Login</button>
        </form>
      </div>
        </div>
     
    </div>
  );
};

export default Login;
