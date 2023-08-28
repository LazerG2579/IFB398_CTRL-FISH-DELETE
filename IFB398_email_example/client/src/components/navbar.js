import React from 'react';
import navbarlogo from '../images/navbarlogo.jpg'

function Navbar() {
    return (
        <div className="nav">
            
            {/* Left side of the Navbar */}
            <div className="nav-left">
            <img
                src={navbarlogo}
                className="navbar-logo"
                alt="Company Logo"
                style={{ width: '145px', height: 'auto' }} 
            />
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About Us</a>
                <a href="/events" className="nav-link">Get Involved</a>
                <a href="/learn-more" className="nav-link">Learn More</a>
                <a href="/contact" className="nav-link">Contact Us</a>
            </div>
            
            {/* Right side of the Navbar */}
            <div className="nav-right">
                <button className="nav-button">Language</button>
                <button className="nav-button">Donate</button>
            </div>
        </div>
    );
}

export default Navbar;
