import React from 'react'
import offshoreimage from '../../assets/offshoreimage.png'
import './OffShoreConsulting.css'
const OffshoreConsulting = () => {
  return (  
    <div className='fidesoffshore-consulting'>
      <div className="fidesoffshore-consulting-container">
        <div className="fidesoffshore-consulting-image">
          <img src={offshoreimage} alt="Offshore Consulting" />
        </div>
        <div className="fidesoffshore-consulting-details">
            <h2 className="fidesoffshore-consulting-title outfit fidespath-mainheader">Your Route to Reliable Onshore and Offshore Consulting Services</h2>
            <p className="fidesoffshore-consulting-description fidespath-paragraph sanserif">
              Welcome to FidesPath, your trusted advisor in consulting solutions. As a premier consulting firm, we specialize in offering unmatched onshore and offshore consulting services.
            </p>
            <p className="fidesoffshore-consulting-description fidespath-paragraph sanserif">
              With a dedication to excellence and innovative approaches, we assist businesses in navigating complex challenges, delivering customized solutions tailored to their specific needs.
            </p>
            <p className="fidesoffshore-consulting-description fidespath-paragraph sanserif">
             Whether you're aiming to optimize your current strategies or embark on new consulting ventures, FidesPath is here to support you at every stage.
            </p>
            <p className="fidesoffshore-consulting-description fidespath-paragraph sanserif">
             Our team of seasoned professionals blends technical proficiency with strategic insights to ensure success for your consulting projects. Explore the path to excellence with FidesPath – where innovation meets reliability.
            </p>
            <a href="" style={{textDecoration:'none'}}><button className='fidesoffshore-consulting-button'>Read More <svg class="industry-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button></a>
        </div>
      </div>
    </div>
  )
}

export default OffshoreConsulting
