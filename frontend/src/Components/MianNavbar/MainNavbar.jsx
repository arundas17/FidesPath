import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import findspathlogo from '../../assets/fidespathlogo.png';
import './MainNavbar.css';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; 

const MainNavbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleDropdownLeave = () => {

    if (!isMobileMenuOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false); 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesDropdownOpen(false);
  };

  return (
    <div className='fidespath-main-navbar'>
      <div className='fidespath-container' style={{
        width: '100%',
        padding: '0 18px',
        background: 'rgba(255, 255, 255, 0.3)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 5px 0px'
      }}>
        <div className='fidesLogo'>
          <Link to="/">
            <img
              style={{ width: '100%' }}
              src={findspathlogo}
              alt='FidesPath Logo'
              className='fidespath-main-navbar-logo'
            />
          </Link>
        </div>

      
        <div className='fidespath-main-navbar-wrapper'>
          <ul className='fidespath-main-navbar-links'>
            <li className='fidespath-main-navbar-link'> <Link to="/">Home</Link></li>
            <li className='fidespath-main-navbar-link'> <Link to="/about">About Us</Link></li>

            
            <li
              className={`fidespath-main-navbar-link dropdown ${isServicesDropdownOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={handleDropdownLeave}
              
            >
              <a href="/services" className="dropdown-toggle" onClick={(e) => e.preventDefault()}>
                Services{' '}
                <FaChevronDown
                  className={`dropdown-arrow ${isServicesDropdownOpen ? 'rotate' : ''}`}
                />
              </a>
              {isServicesDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/services/cloudservices" onClick={handleLinkClick}>Cloud Service</Link></li>
                  <li><Link to="/services/managedservices" onClick={handleLinkClick}>Managed Service</Link></li>
                  <li><Link to="/services/additionalservices" onClick={handleLinkClick}>Additional service</Link></li>
                </ul>
              )}
            </li>

            <li className='fidespath-main-navbar-link'> <Link to="/industries">Industries</Link></li>
            <li className='fidespath-main-navbar-link'> <Link to="/contact">Contact</Link></li>
          </ul>
        </div>

       
        <div className="hamburger-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          <li className='mobile-menu-link'><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li className='mobile-menu-link'><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>

          
          <li className={`mobile-menu-link dropdown ${isServicesDropdownOpen ? 'dropdown-open' : ''}`}>
            <div className="dropdown-toggle-mobile" onClick={toggleServicesDropdown}>
              Services{' '}
              <FaChevronDown className={`dropdown-arrow ${isServicesDropdownOpen ? 'rotate' : ''}`} />
            </div>
            {isServicesDropdownOpen && (
              <ul className="dropdown-menu-mobile">
                <li><Link to="/services/cloudservices" onClick={handleLinkClick}>Cloud Service</Link></li>
                <li><Link to="/services/managedservices" onClick={handleLinkClick}>Managed Service</Link></li>
                <li><Link to="/services/additionalservices" onClick={handleLinkClick}>Additional service</Link></li>
              </ul>
            )}
          </li>

          <li className='mobile-menu-link'><Link to="/industries" onClick={handleLinkClick}>Industries</Link></li>
          <li className='mobile-menu-link'><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavbar;