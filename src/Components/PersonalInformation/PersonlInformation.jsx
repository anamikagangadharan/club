import React from 'react'
import css from "./PersonalInformation.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Check from "../../assets/check.svg"
 
const PersonlInformation = () => {
  return (
    <div className={css.container}>
    <div className={css.div1}>
      <div className={css.div1left}>
      <img src={Arrowleft} alt="" />
      <span>Personal Information</span>
      </div>
      <div className={css.div1right}>
       <img src={Check} alt="" />
      </div>
       </div>

       <div className={css.div2}>
          <span>Your login information have been saved here. It wont be a part of yor public profile.</span>
       </div>

       <div className={css.div3}>
          <form className={css.form1} action="">

              <label className={css.div3label} htmlFor="">Username</label>
              <div className={css.s1}>
              <input className={css.sinput} type="text"  />
    
              </div>

      
              <label className={css.div3label} htmlFor="">Phone number</label>
              <div className={css.s1}>
              <input className={css.sinput} type="number"  />
      
              </div>



          </form>
       </div>
  </div>
  )
}

export default PersonlInformation
