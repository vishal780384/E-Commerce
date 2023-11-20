import React from 'react'
import './CSS/LoginSignUp.css'
const LoginSignUP = () => {
  return (
    <div className='loginsignup'>
         <div className="loginsignup-container">
           <h1>Sign Up</h1>
           <div className="loginsignup-fields">
              <input type='text' placeholder='Enter your name ........' />
              <input type='email' placeholder='Your email' />
              <input type='password' placeholder='password' />
           </div>
           <button>Continue</button>
           <p className='loginsignup-login'>Already have an account <u><span>Login Here</span></u> </p>
           <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''  />
            <p> By continuing, i agree to the terms of use & privacy policy</p>
           </div>
         </div>
    </div>
  )
}

export default LoginSignUP
