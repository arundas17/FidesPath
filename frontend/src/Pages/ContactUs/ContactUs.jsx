import React from 'react';
import './ContactUs.css'; 
import mapicon from '../../assets/mapicon.png'
import contact from '../../assets/email-round-icon.svg'
import DynamicBanner from "../../Components/DynamicBanner/DynamicBanner";
import contactimage from '../../assets/contactusbanner.png'
const ContactUs = () => {
  const contactus=[
     {
        icon:mapicon,
        title:'US Address :',
        desc:'815 Brazos St, Austin, TX - 78701',
        
  },
  {
    icon:mapicon,
    title:'India Address',
    desc:'Hyderabad, Telangana - 500048',
  },
  {
     icon:contact,
     title:'E-mail',
     desc:'contactus@fidespath.com',
  },
  ]
   

  const handleSubmit = (e) => {
    e.preventDefault(); 
   
   
  };

  return (
   <div>
     <DynamicBanner
       title="Contact Us"
        breadcrumbItems={[
          { text: 'Home', link: '/' },
          { text: 'Contact Us', link: '/contact' },
        ]}
        
        backgroundImage={contactimage }
        
      />
<div className="fidespath-contact-page-wrapper">
        <div className="fides-conatctpagedetails">
            <h3
              className="fidespath-mainheader outfit"
              
            >
              How can we help you?
            </h3>
            <p className="fidespath-paragraph sanserif">
             Your support fuels my ability to assist and innovate. Together, we shape a brighter future through collaboration
            </p>
            <div className="fidesmainaboutus-services">
            <div className="wrapper">
              {contactus.map((item, key) => {
                return (
                  <div className="seviceitem">
                    <div className="serviceitemimage">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="servicedetails" style={{marginLeft:'20px'}}>
                      <h3
                        className="fidespath-mainheader outfit"
                        style={{ fontSize: "20px", marginBottom: "8px"  }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="fidespath-paragraph sanserif"
                        style={{ fontSize: "14px" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      <div className="form-container">
        <h1 className='fidespath-mainheader outfit'>Give Us a Message</h1>
        <p className='fidespath-paragraph sanserif'>
          Embrace the journey of growth, for every step forward is a triumph in itself
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid grid-cols-3">
            <input type="text" placeholder="Name" aria-label="Name" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <input type="tel" placeholder="Phone (Optional)" aria-label="Phone (Optional)" />
          </div>

          <div>
            <textarea placeholder="Message" rows="5" aria-label="Message"></textarea>
          </div>

          <div className="form-grid grid-cols-2">
            <input type="text" placeholder="Enter Captcha Code" aria-label="Enter Captcha Code" />
            <div className="captcha-code-wrapper">
              <span className="captcha-code">6RuN#</span>
              <button type="button" className="refresh-icon-button" aria-label="Refresh Captcha">
               
               <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.04 122.88"><path d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z"/></svg>
              </button>
            </div>
          </div>

          <button type="submit"  className='fidesmain-banner-button'>
            SUBMIT POST
          </button>
        </form>
      </div>
    </div>
   </div> 
    
  );
};

export default ContactUs;