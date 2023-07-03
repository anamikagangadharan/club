
// import React from 'react'
import React, { useState } from 'react';
import axios from 'axios';
import css from "./Signup.module.css"
import Eye from "../../assets/eye.svg"


  
const Signup = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!username || !phoneNumber || !password || !confirmPassword) {
      console.log('Validation error: All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      console.log('Validation error: Passwords do not match');
      return;
    }


     // Validate phone number
    if (isNaN(phoneNumber)) {
    console.log('Validation error: Phone number must be a valid number');
    return;
  }


    try {
      // Check if the username already exists
      const response = await axios.get(`http://localhost:3000/check-username/${username}`);

      if (response.data.exists) {
        console.log('Validation error: Username already exists');
        return;
      }

      // Proceed with signup if the username is available
      const signupResponse = await axios.post('http://localhost:3000/signup', {
        username,
        phoneNumber,
        password,
        confirmPassword,
      });

      const data = signupResponse.data;
      console.log('Signup response:', data);

      // Reset the form
      setUsername('');
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };




  return (
    <div className={css.container}>
      <div className={css.div1}>
      <span>Welcome to club</span>
      <span> Start ur engines and join the car enthusiast community</span>
      </div>

      <div className={css.div2}>

        <form className={css.form1} onSubmit={handleSubmit}>
          <input className={css.sinput} type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className={css.sinput} type="text" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

          <div className={css.s1}>
        <input className={css.sinput} type="password"  placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <img className={css.eye} src={Eye} alt="" />
        </div>
       
       <div className={css.s1}>
       <input className={css.sinput} type="password"  placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <img className={css.eye2} src={Eye} alt="" />
       
       </div>
       <button className={css.signupbutton} type="submit">Signup</button>
        </form>
      </div>

      <div className={css.div3}>
        <span>Already have an account? <span>Signin</span></span>
      </div>
      
      
    </div>
  )
}

export default Signup
