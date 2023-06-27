
import React from 'react'
import css from "./Signup.module.css"
import Eye from "../../assets/eye.svg"

const Signup = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
      <span>Welcome to club</span>
      <span> Start ur engines and join the car enthusiast community</span>
      </div>

      <div className={css.div2}>
        <form className={css.form1} action="">
          <input className={css.sinput} type="text" placeholder='Username' />
          <input className={css.sinput} type="text" placeholder='Username' />
          <div className={css.s1}>
        <input className={css.sinput} type="password"  placeholder='New Password'/>
        <img className={css.eye} src={Eye} alt="" />
        </div>
       
       <div className={css.s1}>
       <input className={css.sinput} type="password"  placeholder='Confirm Password'/>
        <img className={css.eye2} src={Eye} alt="" />
       
       </div>
       <button className={css.signupbutton}>Signup</button>
        </form>
      </div>

      <div className={css.div3}>
        <span>Already have an account? <span>Signin</span></span>
      </div>
      
      
    </div>
  )
}

export default Signup
