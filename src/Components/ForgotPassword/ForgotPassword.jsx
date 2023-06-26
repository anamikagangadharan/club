import React from 'react'
import css from "./ForgotPassword.module.css"

const ForgotPassword = () => {
  return (
    <div className={css.container}>
     <div className={css.div1}>
        <span>Forgot password</span>
        <span>Enter you registered phone number to which reset password OTP should be sent</span>
     </div>
     <div className={css.div2}>
     <form className={css.form1} action="">
        <input className={css.sinput} type="text"  placeholder='Phonenumber'/>
       
      
        <button className={css.fgbutton}>Forgot Password</button>
    </form>
     </div>
    </div>
  )
}

export default ForgotPassword
 