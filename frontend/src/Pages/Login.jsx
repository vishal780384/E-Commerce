import React from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className='login-here'>
         <div className="login-container">
           <h1>Login Here</h1>
           <div className="login-fields">
              <input type='email' placeholder='Your email' />
              <input type='password' placeholder='password' />
           </div>
           <button>Login</button>  

           <p className='loginsignup-login'>If You don't have an account <u> 
            <Link to="/register">Register</Link> 
            </u> </p>
   
         </div>
    </div>
  )
}

export default Login
