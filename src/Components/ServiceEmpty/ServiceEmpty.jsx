import React from 'react'
import css from "./ServiceEmpty.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Plus from "../../assets/plus.svg"
import Service from "../../assets/ServiceEmpty.svg"

const ServiceEmpty = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
        <div className={css.div1left}>
        <img className={css.arrowleft} src={Arrowleft} alt="" />
        <span>Car Details</span>
        </div>
        <div className={css.div1right}>
         <img className={css.plus} src={Plus} alt="" />
        </div>
         </div>

         <div className={css.div2}>
            <img className={css.car} src={Service} alt="" />
            <span>You haven't  booked any service yet</span>
            <button className={css.viewservicebutton}>View Services</button>
         </div>

      
     
    </div>
  )
}

export default ServiceEmpty
