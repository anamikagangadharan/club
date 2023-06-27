import React from 'react'
import css from "./Otp.module.css"

const Otp = () => {
  const [counter, setCounter] = React.useState(59);
  const [minute,setMinute]=React.useState(2)
  React.useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);
  React.useEffect(() => {
      const timer =
      minute > 0 && setInterval(() => setMinute(minute - 1), 60000);
      return () => clearInterval(timer);
  }, [minute]); 

  return (
   <div className={css.container}>


    
    <div className={css.div1}>
           <span>OTP Verification</span>
           <span>We,ve just sent an one-time-password(OTP) to your registered phone number</span>
    </div>

    <div className={css.div2}>
      <div className={css.sdiv}>0</div>
      <div className={css.sdiv}>4</div>
      <div className={css.sdiv}>7</div>
      <div className={css.sdiv}>3</div>
    </div>

    <div className={css.div3}>
      <button className={css.verify}>Verify</button>
    </div>

    <div className={css.div4}>
       <span>{minute}:{counter}</span>
    </div>
    <div className={css.div5}>
       <span>Didn’t receive a code? <span> Resend OTP</span></span>
    </div>


    
   </div>
  )
}

export default Otp
