import React, { useState } from 'react'
import './CSS/SignUp.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
const SignUP = () => {

  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit=(e)=>{
       e.preventDefault()
       axios.post('',{fname,lname,email,password})
       .then(result =>console.log(result))
       .catch(err => console.log(err))
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Register for Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type='text'
              placeholder='First name '
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type='text'
              placeholder='Last name '
              onChange={(e) => setLname(e.target.value)}
            />
            <input
              type='email'
              placeholder='Your email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button>Register</button>

        <p className='loginsignup-login'>Already have an account <u>
          <Link to="/login" > Login Here </Link>
        </u> </p>

        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p> By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default SignUP
