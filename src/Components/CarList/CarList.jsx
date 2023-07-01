import React from 'react'
import css from "./CarList.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Car1 from "../../assets/cardetailsbg.svg"
import Car2 from "../../assets/car2.svg"
import Profile from "../../assets/Profile.svg"

const CarList = () => {
  return (
    <div className={css.container}>

      <div className={css.div1}>
        <img src={Arrowleft} alt="" />
      </div>

      <div className={css.div2}>

        <div className={css.div2left}>
            <img className={css.profile} src={Profile} alt="" />
        </div>

        <div className={css.div2right}>
            <span>Vlamidar Gruev</span>
            <span>Bronze LV3</span>
        </div>

      </div>


     <div className={css.div3}>
        <div className={css.div3top}>
            <img className={css.car1} src={Car1} alt="" />
        </div>
        <div className={css.div3bottom}>
            <span>KL 01 C 7016</span>
            <span>Lamborghini</span>
        </div>
     </div>

     <div className={css.div3}>
        <div className={css.div3top}>
            <img className={css.car1} src={Car2} alt="" />
        </div>
        <div className={css.div3bottom}>
            <span>KL 07 Z 3421</span>
            <span>Ferrari</span>
        </div>
     </div>








    </div>
  )
}

export default CarList
