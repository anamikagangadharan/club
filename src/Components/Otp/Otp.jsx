import React, { useState } from 'react';
import axios from 'axios';
import css from "./Otp.module.css"
// import { text } from 'body-parser';

const Otp = () => {
  const [counter, setCounter] = React.useState(59);
  const [minute,setMinute]=React.useState(2)
  const [otpValues, setOtpValues] = useState(['', '', '', '']);



  const handleOtpChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  const handleVerify = () => {
    const otp = otpValues.join('');

    axios.post('http://localhost:3000/otp', { otp })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleResendOTP = () => {
    // TODO: Implement the resend OTP logic here
    // You can make an API call to send a new OTP to the user's phone number
    // You can also reset the timer here if needed
    console.log('OTP Resent Successfully');
  };






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
      {otpValues.map((value, index) => (
          <input
            key={index}
            className={css.sdiv}
            type="number"
            value={value}
            onChange={(e) => handleOtpChange(index, e.target.value)}
          />
        ))}
    </div>
  

    <div className={css.div3}>
      <button className={css.verify}onClick={handleVerify}>Verify</button>
    </div>

    <div className={css.div4}>
       <span>{minute}:{counter}</span>
    </div>
    <div className={css.div5}>
       <span>Didn’t receive a code? <button className={css.resend} onClick={handleResendOTP}> Resend OTP
       </button>
        </span>
      </div>
    </div>
  )
}

export default Otp
