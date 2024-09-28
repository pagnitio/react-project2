import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <h4>About Us</h4>
          <p>
            We are a dedicated team providing the best services to our customers.
            Our mission is to offer innovative solutions and build strong relationships.
          </p>
        </div>
        <div className="footer-center">
          <h4>Quick Links</h4>
          <div className="footer_menu">
          <Link to="/" className="fitems">
          Home
        </Link>
          <Link to="/contact" className="fitems">
          Contact
        </Link>
          </div>
        
        </div> 
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
