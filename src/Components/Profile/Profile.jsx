import React from 'react'
import css from "./Profile.module.css"
import Arrowleft from "../../assets/arrow-left.svg"

const Profile = () => {
  return (
    <div className={css.container}>
       <div className={css.div1}>
        <img src={Arrowleft} alt="" />
        <span>Profile</span>
       </div>
    </div>
  )
}

export default Profile
