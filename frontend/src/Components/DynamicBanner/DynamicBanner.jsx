import React from 'react';
import './DynamicBanner.css';

const DynamicBanner = ({ title, breadcrumbItems, backgroundImage, overlayColor = 'rgba(0, 0, 0, 0.5)' }) => {

  const heroStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  } : {};

  return (
    <div className="page-hero-section" style={heroStyle}>
      {backgroundImage && <div className="page-hero-overlay" style={{ backgroundColor: overlayColor }}></div>}

      <div className="page-hero-content dynamicbanner">
        
        <h1 className="dynamicbannettitle outfit">{title}</h1>
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <nav className="page-hero-breadcrumbs">
            <ul>
              {breadcrumbItems.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <a href={item.link} className='fidespath-paragraph sanserif'>{item.text}</a>
                  ) : (
                    <span className='currentroute'>{item.text}</span>
                  )}
                  {index < breadcrumbItems.length - 1 && <span className="breadcrumb-separator"> &gt; </span>}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default DynamicBanner;