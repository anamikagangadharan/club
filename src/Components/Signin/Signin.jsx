import React from 'react'
import css from "./Signin.module.css"
import Eye from "../../assets/eye.svg" 

const Signin = () => {
  return (
    <div className={css.container}>
     <div className={css.div1}>
        <span>Welcome back</span>
        <span>Sign in to your account</span>
     </div>
     
 <div className={css.div2}>
    <form className={css.form1} action="">
        <input className={css.sinput} type="text"  placeholder='Phonenumber'/>
        <div className={css.s1}>
        <input className={css.sinput} type="password" placeholder='Password' />
        <img className={css.eye} src={Eye} alt="" />
        </div>
       
        <span className={css.fg}>Forgot password?</span>
        <button className={css.snbutton}>Sign In</button>
    </form>
    <span className={css.desc}>By clicking on login,I accept to the <span className={css.tc}>Privacy Policy</span> and <span className={css.tc}>Terms @ Conditions</span> </span>
    <span className={css.desc2}>Don’t have an account? <span className={css.sup}>Sign up</span> </span>
 </div>
    
    </div>
  )
}

export default Signin
 