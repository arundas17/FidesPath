import React from 'react'
import './Industry.css'
import finance from '../../assets/finance-Aboutus.png'
import retail from '../../assets/ecommerce.png'
import logistics from '../../assets/robotic.png'
import media from '../../assets/mediafides.png'
import collabrative from '../../assets/collaborative.png'
import agile from '../../assets/agile.png'
import data from '../../assets/data-driven.png';
import global from '../../assets/global.png'
import costeffective from '../../assets/cost-effective.png'
import insdustries from '../../assets/services.jpg'
import DynamicBanner from "../../Components/DynamicBanner/DynamicBanner";
const Industry = () => {
  return (
      <div>
        <DynamicBanner
       title="Industries"
        breadcrumbItems={[
          { text: 'Home', link: '/' },
          { text: 'Industries', link: '/industries' },
        ]}
        
        backgroundImage={insdustries}
        
      />
       <div className='fidesaboutus Aboutus-container industry'>
      
      <div className="fidesaboutuswrapper ">
        <h2 className="outfit fidespath-mainheader  ">FidesPath: Your Industry-Tailored Consulting Partner</h2>
        <p className=" fidespath-paragraph sanserif indystry-para" >
       While FidesPath offers expertise across a spectrum of consulting domains,
       we further specialize by concentrating on specific industries.
        </p>
         <p className="fidespath-mainheader sanserif" style={{ fontSize: '18px' }}>Industry Focus: In General</p>
      </div>

      <div className="fidesdeatlcards-wrapper">
        <div className="fidesaboutcards">
           <div className="cardimageabouts"><img src={finance} alt="" /></div>
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Financial Services</h3>
            <p className="fidespath-paragraph sanserif">We specialize in regulatory compliance, risk management, and financial technology integration for the financial industry. Our services include tailored solutions for regulatory compliance, risk mitigation, and strategic financial advisory.</p>
             <p className="fidespath-paragraph sanserif">Partner with us to navigate challenges and optimize performance in today's dynamic financial landscape.</p>
           </div>
        </div>
         
        <div className="fidesaboutcards">
           
           <div className="carddetailsaboutus industryhealthcare">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Healthcare</h3>
            <p className='splpara'>We specialize in providing customized solutions for the healthcare industry, covering:</p>
             <ol className="specilaity">
              <li>
                <div className="specialityitems">
                  
                  <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "16px" }}
                  >
                    We build lasting relationships based on open communication
                    and integrity.
                  </p>
                </div>
              </li>
              <li>
                <div className="specialityitems">
                  
                  <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "16px" }}
                  >
                    We adapt to your needs and the ever-changing tech landscape.
                  </p>
                </div>
              </li>
              <li>
                <div className="specialityitems">
                  
                  <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "16px" }}
                  >
                    Our team boasts a proven track record of successful
                    projects.
                  </p>
                </div>
              </li>
              <li>
                <div className="specialityitems">
                 
                  <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "16px" }}
                  >
                    We offer competitive rates without compromising quality.
                  </p>
                </div>
              </li>
            </ol>
            <p
                    className="fidespath-paragraph sanserif"
                    style={{ fontSize: "16px" }}
                  >
                    Partner with us to navigate challenges and optimize performance in healthcare.
                  </p>
            
            
           </div>
           <div className="cardimageabouts"><img src={logistics} alt="" /></div>
        </div>
         <div className="fidesaboutcards">
           <div className="cardimageabouts"><img src={retail} alt="" /></div>
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Retail & E-commerce</h3>
            <p className="fidespath-paragraph sanserif">We create engaging and interactive applications for content creation, distribution, and audience engagement.</p>
             <p className="fidespath-paragraph sanserif">Entertainment: We understand the dynamic nature of the media and entertainment industry. </p>
           </div>
        </div>
        <div className="fidesaboutcards">
           
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Manufacturing & Logistics</h3>
            <p className="fidespath-paragraph sanserif">We streamline your operations with robust software solutions designed for production management, quality control, and efficient logistics management.</p>
            
           </div>
           <div className="cardimageabouts"><img src={logistics} alt="" /></div>
        </div>
         <div className="fidesaboutcards">
           <div className="cardimageabouts"><img src={media} alt="" /></div>
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Media & Entertainment</h3>
            <p className="fidespath-paragraph sanserif">We streamline your operations with robust software solutions designed for production management, quality control, and efficient logistics management.</p>
             <p className="fidespath-paragraph sanserif">Partner with us to navigate challenges and optimize performance in today's dynamic financial landscape.</p>
           </div>
        </div>
         <div className='fidesindustrymessage'>
            <p className="fidespath-paragraph sanserif">Beyond these core industries, Fides Path readily adapts its expertise to your specific needs. No matter your industry,
             we can provide tailored solutions that address your unique challenges and unlock your full potential.</p>
        </div>
        <div className="fidescapcut">
          <p className="fidespath-mainheader sanserif" style={{ fontSize: '18px' }}>Unique Value Proposition:</p>
          <p className=" fidespath-paragraph sanserif indystry-para" >
           While Fides Path possesses expertise across various software development domains,
            we also delve deeper by focusing on specific industries:
        </p>
         
        </div>
          
          <div className="fidesaboutcards">
           <div className="cardimageabouts"><img src={collabrative} alt="" /></div>
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Collaborative Approach</h3>
            <p className="fidespath-paragraph sanserif">We work closely with you throughout the entire development process, ensuring your vision is translated into a successful solution.</p>
           </div>
        </div>
        <div className="fidesaboutcards">
           
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Agile Methodology</h3>
            <p className="fidespath-paragraph sanserif">We embrace an agile approach, allowing for continuous adaptation and delivery of high-quality software in short sprints.</p>
            
           </div>
           <div className="cardimageabouts"><img src={agile} alt="" /></div>
        </div>
         <div className="fidesaboutcards">
           <div className="cardimageabouts"><img src={data } alt="" /></div>
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Data-Driven Decisions</h3>
             <p className="fidespath-paragraph sanserif">We leverage data and analytics to inform our development process and provide you with measurable results.</p>
           </div>
        </div>
        <div className="fidesaboutcards">
           
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Cost-Effective Solutions</h3>
            <p className="fidespath-paragraph sanserif">We offer competitive rates without compromising on quality or expertise.</p>
            
           </div>
           <div className="cardimageabouts"><img src={costeffective} alt="" /></div>
        </div>
         <div className="fidesaboutcards">
           <div className="cardimageabouts"><img src={global} alt="" /></div>
           <div className="carddetailsaboutus">
            <h3 className="fidespath-mainheader outfit" style={{ fontSize: '30px' }}>Global Delivery Model</h3>
             <p className="fidespath-paragraph sanserif">We leverage our global network to provide you with the optimal blend of onshore and offshore resources, ensuring cost-effectiveness and access to diverse skillsets.</p>
           </div>
        </div>
         <div className='fidesindustrymessage'>
            <p className="fidespath-paragraph sanserif">FidesPath is your trusted partner in achieving your consulting objectives. With our specialized industry focus,
distinctive value proposition, and dedication to excellence, we empower you to develop tailored solutions
that foster business growth and prosperity.</p>
        </div>
       
        
      </div>
    </div>
      </div>

     
   
  )
}

export default Industry
