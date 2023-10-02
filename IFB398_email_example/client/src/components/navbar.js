import React from 'react';
import navbarlogo from '../images/navbarlogo2.jpg'
import { Link } from "react-router-dom"
import { useEffect } from 'react';

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
                <Link className="nav-link" to={"/"}> Home </Link>
                <Link className="nav-link" to={"/about"}> About Us </Link>
                <Link className="nav-link" to={"/events"}> Get Involved</Link>
                <Link className="nav-link" to={"/learn-more"}> Learn More </Link>
                <Link className="nav-link" to={"/contact"}> Contact Us </Link>
                
            </div>
            
            {/* Right side of the Navbar */}
            <div className="nav-right">
                <button className="nav-button">Language</button>
               <Link to="./events#donate">
                <button className="nav-button">Donate</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
