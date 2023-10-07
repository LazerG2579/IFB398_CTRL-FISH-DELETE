import React from 'react';
import "../components/components_css/footer.css"
import { Link } from 'react-router-dom';
import footerLogo from "../images/footerlogo.jpg"
import facebookIcon from "../images/facebook_icon.jpg"
import instagramIcon from "../images/instagram_icon.jpg"
export default function Footer() {
  return (
    <footer>
      {/* Top Row */}
      <div className="top-row">
        <div className="column">
          <img src={footerLogo} alt="Your Alt Text" />
        </div>

        <div className="column">
          <h3>About Us</h3>
          <ul className="link-list">
            <li><Link to="/who-are-we">Who Are We?</Link></li>
            <li><Link to="/our-projects">Our Projects</Link></li>
            <li><Link to="/learn-more">Learn More</Link></li>
          </ul>
        </div>

        <div className="column">
          <h3>Get Involved</h3>
          <ul className="link-list">
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/events#volunteer">Volunteer</Link></li>
            <li><Link to="/events#donate">Donate</Link></li>
          </ul>
        </div>

        <div className="column">
          <h3>Contact Us</h3>
          <p>envirofishinc@gmail.com</p>
          <p> 0403 713 820</p>
        </div>
      </div>

      <div className="margin"></div>

      <div className="bottom-row">
        <div className="follow-us">
          <span>Follow Us:</span>
          <img src={facebookIcon} alt="Icon 1" />
          <img src={instagramIcon} alt="Icon 2" />
        </div>
        <div className="copyright">
          © Enviro Fish Inc, 2023
        </div>
      </div>
    </footer>
  );
}
