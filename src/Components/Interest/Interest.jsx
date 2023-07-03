import React from 'react'
import css from "./Interest.module.css"

const Interest = () => {
  return (
    <div className={css.container}>
      <div className={css.wrap1}>
      <div className={css.div1}>
            <span>Interests</span>
            <span>Select 3 or more of your interests</span>
        </div>
        <div className={css.div2}>
            <div className={css.boxmain}>
            <div className={css.bx}>Racing</div>
            <div className={css.bx}>Motorsports</div>
            <div className={css.bx}>Vintage</div>
            <div className={css.bx}>OffRoad</div>
            <div className={css.bx}>Drift</div>
            <div className={css.bx}>Supercars</div>
            <div className={css.bx}>German</div>
            <div className={css.bx}>Photography</div>
            </div>
            
        </div>

      </div>
        

        <div className={css.div3}>
          <button className={css.savebutton}> Save</button>
        </div>

        
        
       
      
    </div>
  )
}

export default Interest
