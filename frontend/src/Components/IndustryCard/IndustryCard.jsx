import React from 'react';
import './IndustryCard.css'; 

const IndustryCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="industry-card-wrapper">
      <div className="industry-card">
        <div className="industry-card-image-container">
          <img src={imageUrl} alt={title} className="industry-card-image " />
        </div>
        <div className="industry-card-content">
          <h3 className="industry-card-title fidespath-mainheader outfit" style={{fontSize:'19px'}}>{title}</h3>
          <p className="industry-card-description" style={{fontSize:'16px',marginBottom:'10px'}}>{description}</p>
          <a href={link} className="industry-card-link industrycarbutton">
            READ MORE
            <svg className="industry-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
