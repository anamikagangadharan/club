import React from 'react'
import css from "./ResetPasswors.module.css"
import Eye from "../../assets/eye.svg" 

const ResetPassword = () => {
  return (
    <div className={css.container}>
     <div className={css.div1}>
        <span>Reset password</span>
     </div>
     <div className={css.div2}>
     <form className={css.form1} action="">
        <div className={css.s1}>
        <input className={css.sinput} type="password"  placeholder='New Password'/>
        <img className={css.eye} src={Eye} alt="" />
        </div>
       
       <div className={css.s1}>
       <input className={css.sinput} type="password"  placeholder='Confirm Password'/>
        <img className={css.eye2} src={Eye} alt="" />
       
       </div>
       
      
        <button className={css.resetbutton}>Reset & Signin</button>
    </form>
     </div>
    </div>
  )
}

export default ResetPassword
 