import React from 'react'
import css from "./Notification.module.css"
import { NotificationList } from '../../data/NotificationList'
import Arrowleft from "../../assets/arrow-left.svg"
import Eye from "../../assets/eye.svg"

const Notification = () => {
  return (
    <div className={css.container}>

       <div className={css.div1}>
        <img src={Arrowleft} alt="" />
        <span>Notification</span>
       </div>
       <div className={css.wrapper1}>
            <span className={css.date}>today</span>
{NotificationList.map((data,i)=>{
    return(
       
        <div className={css.div2}>
            <div className={css.div2left}>
                <img src={Eye} alt="" />
            </div>
            <div className={css.div2right}>
                <div className={css.head}>{data.heading}</div>
                <div className={css.desc}>{data.description}</div>
            
           
            </div>
           
          
        </div>
       
    )
})}
 </div> 
      
    </div>
  )
}

export default Notification
