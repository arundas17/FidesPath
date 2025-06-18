import React from 'react';
import fidespathbannerfimage from '../../assets/fidesbannerimage.png';
import './MainBanner.css';

const MainBanner = () => {
  return (
    <>
     
      <div className='fidesmain-banner'>
        <div className='fidesmain-banner-image'>
     
          <img src={fidespathbannerfimage} alt="FidesPath Banner" />
        </div>
        
        <div className="fidesmain-banner-container">
          <h5 className='fidesmainbannersubheader sanserif'>welcome to FidesPath</h5>
          <div className='fidesmain-banner-header fidespath-mainheader outfit'>
            Customized Consulting Solutions, Delivered Seamlessly by FidesPath
          </div>
          <p className='fidesmain-banner-paragraph sanserif'>
            Welcome to FidesPath, your trusted partner in consulting services. As a premier consulting firm, we specialize in providing unparalleled consulting solutions.
          </p>
          <a href="#" style={{textDecoration:'none'}}><button className='fidesbanner-button'>Read More <svg class="industry-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button></a>
        </div>
      </div>

    
      <div className='fidesmain-mobile-banner'>
        
        <div className="fidesmain-banner-container mobile-background-image">
          
          <h5 className='fidesmainbannersubheader sanserif'>welcome to FidesPath</h5>
          <div className='fidesmain-banner-header fidespath-mainheader outfit'>
            Customized Consulting Solutions, Delivered Seamlessly by FidesPath
          </div>
          <p className='fidesmain-banner-paragraph sanserif'>
            Welcome to FidesPath, your trusted partner in consulting services. As a premier consulting firm, we specialize in providing unparalleled consulting solutions.
          </p>
          <a href="#" style={{textDecoration:'none',margin:'0 auto'}} ><button className='fidesmain-banner-button'>Read More
            <svg class="industry-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button></a>
        </div>
      </div>
    </>
  );
};

export default MainBanner;