import React from 'react'
import css from "./Notifications.module.css"
import Arrowleft from "../../assets/arrow-left.svg"
import Discount from "../../assets/discount.svg"

const Notifications = () => {
  return (
    <div className={css.container}>
       <div className={css.div1}>
        <img src={Arrowleft} alt="" />
        <span>Notification</span>
       </div>

    <div className={css.div2}>
        <span className={css.date}>Today</span>
        <div className={css.box}>
            <div className={css.boxleft}>
                <img className={css.discount} src={Discount} alt="" />
            </div>
            <div className={css.boxright}>
                <div className={css.boxhead}>Your Points have been added</div>
                <div className={css.boxdesc}>Congragulations on earning 300 points at the event</div>
            </div>
        </div>
    </div>
    <div className={css.div2}>
        <span className={css.date}>Yesterday</span>
        <div className={css.box}>
            <div className={css.boxleft}>
                <img className={css.discount} src={Discount} alt="" />
            </div>
            <div className={css.boxright}>
                <div className={css.boxhead}>Your Points have been added</div>
                <div className={css.boxdesc}>Congragulations on earning 300 points at the event</div>
            </div>
        </div>
        <div className={css.box}>
            <div className={css.boxleft}>
                <img className={css.discount} src={Discount} alt="" />
            </div>
            <div className={css.boxright}>
                <div className={css.boxhead}>Your Points have been added</div>
                <div className={css.boxdesc}>Congragulations on earning 300 points at the event</div>
            </div>
        </div>
        <div className={css.box}>
            <div className={css.boxleft}>
                <img className={css.discount} src={Discount} alt="" />
            </div>
            <div className={css.boxright}>
                <div className={css.boxhead}>Your Points have been added</div>
                <div className={css.boxdesc}>Congragulations on earning 300 points at the event</div>
            </div>
        </div>
    </div>

    <div className={css.div2}>
        <span className={css.date}>May 24,2023</span>
        <div className={css.box}>
            <div className={css.boxleft}>
                <img className={css.discount} src={Discount} alt="" />
            </div>
            <div className={css.boxright}>
                <div className={css.boxhead}>Your Points have been added</div>
                <div className={css.boxdesc}>Congragulations on earning 300 points at the event</div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Notifications
