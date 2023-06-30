import React from 'react'
import css from "./QRcode.module.css"
import Share from "../../assets/share.svg"
import Arrowleft from "../../assets/arrow-left.svg";
import Profile from "../../assets/Profile.svg"
import Code from "../../assets/code.svg"

const QRcode = () => {
  return (
    <div className={css.container}>
         <div className={css.div1}>
        <div className={css.div1left}>
        <img className={css.arrowleft} src={Arrowleft} alt="" />
        <span>QR Code</span>
        </div>
        <div className={css.div1right}>
         <img className={css.share} src={Share} alt="" />
        </div>
         </div>

         <div className={css.div2}>
            <img className={css.profile} src={Profile} alt="" />
            <span>Vladimar Gruev</span>
            <span>Bronze LV3</span>
            <img className={css.code} src={Code} alt="" />
         </div>
      
    </div>
  )
}

export default QRcode
