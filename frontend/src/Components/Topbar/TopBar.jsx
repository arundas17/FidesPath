import React from "react";
import loctiontobar from '../../assets/exactlocation.png'
import email from '../../assets/mail-16.png'
import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="fidespath-topbar">
      <div className="fidespath-container">
        <ul className="fidespath-topbar-details">
          <li className="fidespath-topbar-address">
            <img src={loctiontobar} alt="FidesPath Logo" />
            <div>815 Brazos St, Austin, TX - 78701</div>
          </li>
          <li className="fidespath-topbar-location">
            <img src={loctiontobar}  alt="" />
            Hyderabad, Telangana , India - 500048
          </li>
        </ul>
        <div className="fidespath-topbar-mail">
            <img src={email} alt="" />
            <div className="fidespath-topbar-mail-text"><a href="mailto:contactus@fidespath.com">contactus@fidespath.com</a></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
