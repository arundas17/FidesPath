import React from "react";
import footerloggo from "../../assets/fidesfooterlogo.png";
import './FidesFooter.css'; 
import exactlocation from '../../assets/exactlocation.png'
const FidesFooter = () => {
  return (
    
      <div>
        <div className="fidesfooter">
      <div className="fidespath-common-container">
        <div className="fidesfooter-wrapper">
          <div className="fideslogo">
            <img src={footerloggo} alt="Fides Logo" />
            <p className="fidespath-footer-text sanserif">
                Welcome to FidesPath - Your Path to Reliable Cloud and Managed Services
            </p>
          </div>
          <div className="fidesaddress">
            <div className="fidesfooter-itemhead">
                <div className="title outfit">Address</div>
            </div>
            <div className="fidesaddress-wrapper ">

              <div className="location sanserif">Us Address :</div>
              <div className="exactlocation">
                <span>
                  <img src={exactlocation} alt="" />
                </span>
                <p className="sanserif adressdeatail">
                  815 Brazos St, Austin, <br /> TX - 78701{" "}
                </p>
              </div>
              <div className="location sanserif">India Address :</div>
              <div className="exactlocation">
                <span>
                  <img src={exactlocation} alt="" />
                </span>
                <p className="sanserif adressdeatail">
                 Hyderabad, Telangana - 500048{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="Toplinks">
                <div className="fidesfooter-itemhead">
                <div className="title outfit">Top Links</div>
            </div>
            <ul className="fidespath-footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="location">
                <div className="fidesfooter-itemhead">
                <div className="title outfit">Location</div>
            </div>

            <div className="location-details">
                <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5852590740924!2d77.2090212149952!3d28.613939582424846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd21f8b19d45%3A0xc664650a316270d1!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
          width="350"
          height="250" 
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Embedded Google Map of India Gate" 
        ></iframe>
            </div>
          </div>
        </div>
      </div>
     
    </div>
     <div className="footerbottom" style={{
          background: '#c6d3e2',
    fontSize: '14px',
    fontFamily: 'sans-serif',
    padding: '20px 0',
    textAlign: 'center',
     }} >
        <div className="copyright-text">
                            <span>Copyright © <span style={{color:'#2e6ab3'}}> FidesPath </span> All Rights Reserved</span>
                            </div>
      </div>
      </div>
  );
};

export default FidesFooter;
