import React from "react";
import css from "./Profile.module.css";
import Arrowleft from "../../assets/arrow-left.svg";
import Profiles from "../../assets/Profile.svg";
import Pen from "../../assets/pen-square 1.svg";
import Right from "../../assets/chevron-right.svg";
import User from "../../assets/user.svg";
import CarDetails from "../../assets/cardetails.svg"
import MyEvents from "../../assets/events.svg"
import MyServices from "../../assets/services.svg"
import Referral from "../../assets/referral.svg"
import Help from "../../assets/helpcenter.svg"

const Profile = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <img src={Arrowleft} alt="" />
        <span>Profile</span>
      </div>

      <div className={css.div2}>
        <div className={css.profilecontent}>
          <img className={css.profile} src={Profiles} alt="" />
          <img className={css.pen} src={Pen} alt="" />
          <span className={css.pname}>Vladimar Gruev</span>
          <span className={css.plevel}>Bronze LV3</span>
        </div>
      </div>

      <div className={css.div3}>
        <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={User} alt="" />{" "}
            </div>
            <span>Personal Information</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={CarDetails} alt="" />{" "}
            </div>
            <span>Car Details</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={MyEvents} alt="" />{" "}
            </div>
            <span>My Events</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={MyServices} alt="" />{" "}
            </div>
            <span>My Services</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={Referral} alt="" />{" "}
            </div>
            <span>Referral</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={Help} alt="" />{" "}
            </div>
            <span>Help Center</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Profile;
