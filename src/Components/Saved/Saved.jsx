import React from 'react'
import css from "./Saved.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Filter from "../../assets/Filter.svg"
import Addto from "../../assets/addtolist.svg"
import Save1 from "../../assets/saved1.svg"
import Location from "../../assets/map-pin.svg"
import P1 from "../../assets/person1.svg"
import P2 from "../../assets/person2.svg"
import P3 from "../../assets/person3.svg"

const Saved = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
        <div className={css.div1left}>
        <img className={css.arrowleft} src={Arrowleft} alt="" />
        <span>Saved</span>
        </div>
        <div className={css.div1right}>
         <img className={css.filter} src={Filter} alt="" />
        </div>
         </div>


         <div className={css.div2}>
            <div className={css.s1}>
                <img className={css.save1} src={Save1} alt="" />
                <div className={css.date}>
                    <span>10</span>
                    <span>June</span>
                </div>
                <div className={css.addto}>
                    <img src={Addto} alt="" />
                </div>
            </div>

            <div className={css.s2}>
                The next event is going to conduct on the central stadium
                 </div>

                 </div>

                 {/* div 3 from herer */}

                 <div className={css.s3}>
                    <div className={css.s3left}>
                       {/* <div className={css.leftfirst}> */}
                        <img className={css.p1} src={P1} alt="" />
                        <img className={css.p2} src={P2} alt="" />
                        <img className={css.p3} src={P3} alt="" />

                       {/* </div> */}

                       <div className={css.s3middle}>
                         <span>+40 Going</span>
                       </div>
                       </div>

                    <div className={css.s3right}>
                        <img src={Location} alt="" />
                        Near Central stadium
                    </div>
                 </div>
        





      
    </div>
  )
}

export default Saved
