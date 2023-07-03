import React from 'react'
import css from "./ChangePassword.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Check from "../../assets/check.svg"
import Eye from "../../assets/eye.svg" 

const ChangePassword = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <div className={css.div1left}>
        <img src={Arrowleft} alt="" />
        <span>Change Password</span>
        </div>
        <div className={css.div1right}>
         <img src={Check} alt="" />
        </div>
         </div>

         <div className={css.div2}>
            <span>Your password must be atleast 6 characters and should include a combination of numbers and letters</span>
         </div>

         <div className={css.div3}>
            <form className={css.form1} action="">

                <label className={css.div3label} htmlFor="">Current password</label>
                <div className={css.s1}>
                <input className={css.sinput} type="password"  />
        <img className={css.eye} src={Eye} alt="" />
                </div>

        
                <label className={css.div3label} htmlFor="">New password</label>
                <div className={css.s1}>
                <input className={css.sinput} type="password"  />
        <img className={css.eye} src={Eye} alt="" />
                </div>


                <label className={css.div3label} htmlFor="">Confirm password</label>
                <div className={css.s1}>
                <input className={css.sinput} type="password"  />
        <img className={css.eye} src={Eye} alt="" />
                </div>

             <span className={css.fp}>Forgot password?</span>


            </form>
         </div>
    </div>
  ) 
}

export default ChangePassword
