import React from 'react'
import css from "./Addcar.module.css"

const Addcar = () => {
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <span>Add Car Details</span>
            <span>Skip</span>
        </div>


        <div className={css.div2}>
            <form className={css.form1} action="">
                <div className={css.filediv}>
                <input className={css.file} type="file"   placeholder='hhfgf'/>
                </div>
                
                <input className={css.sinput} type="text"  placeholder='Vehicle Registration number'/>
                <input className={css.sinput} type="text"  placeholder='Make'/>
                <input className={css.sinput} type="text"  placeholder='Model'/>
                <input className={css.sinput} type="text"  placeholder='Power (bhp@rpm)'/>
                <input className={css.sinput} type="text"  placeholder='Torque (Nm@rpm'/>
                <input className={css.sinput} type="text" placeholder='color' />
                 
                 <button className={css.savebutton}>Save</button>
            </form>
        </div>




        {/* <div className={css.div3}></div> */}
      
    </div>
  )
}

export default Addcar
