import React from 'react'
import css from "./Scan.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Exclude from "../../assets/Exclude.svg"

const Scan = () => {
  return (
    <div className={css.container}>
         <div className={css.div1}>
        <div className={css.div1left}>
        <img className={css.arrowleft} src={Arrowleft} alt="" />
        <span>Scan QR</span>
        </div>
         </div>

         <div className={css.div2}>
            <img className={css.exclude} src={Exclude} alt="" />
            <button className={css.uploadbutton}>Upload from  gallery</button>
         </div>
      
    </div>
  )
}

export default Scan
