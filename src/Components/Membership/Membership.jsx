import React from 'react'
import css from "./Membership.module.css"
import Eye from "../../assets/eye.svg"

const Membership = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}> 
        <span>Membership</span>
        <span>X</span>
        </div>

        <div className={css.div2}></div>

        <div className={css.div3}>
            <span>Benefits of this plan</span>

           <ul className={css.ul}>
            <div className={css.line}> 
                <img src={Eye} alt="" />
                <li>This event is  based on</li>
            </div>
            <div className={css.line}> 
                <img src={Eye} alt="" />
                <li>This event is  based on</li>
            </div>
            <div className={css.line}> 
                <img src={Eye} alt="" />
                <li>This event is based on</li>
            </div>
            <div className={css.line}> 
                <img src={Eye} alt="" />
                <li>This event is based on</li>
            </div>
            <div className={css.line}> 
                <img src={Eye} alt="" />
                <li>This event is  based on</li>
            </div>
           </ul>


             </div>

             <div className={css.div4}>
                <button className={css.planbutton}>GET PLAN</button>
             </div>
      
    </div>
  )
}

export default Membership
