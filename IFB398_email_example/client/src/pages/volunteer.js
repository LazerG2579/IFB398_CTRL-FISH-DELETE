import React from 'react';
import './pages_css/Volunteer.css';
import volunteerpic from "../images/volunteerpic1.jpg"
import photo_icon from "../images/photo_icon.jpg"
import plant_icon from "../images/plant_icon.jpg"
import data_icon from "../images/data_icon.jpg"
import smile_icon from "../images/smile_icon.jpg"
import { Link } from "react-router-dom"


function Volunteer() {

  return (
    <div className="volunteer-container">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + volunteerpic} alt="Enviro Fish" />
      </div>
      <div className="info-container">
        <h1>Become a Volunteer</h1>
        <p>As a volunteer of Enviro Fish, you’ll have the opportunity to help improve the state of the environment through various outlets. The opportunities available for you to get involved in are:</p>
        <ul>
          <li><img src={process.env.PUBLIC_URL + photo_icon} alt="Photography" />Photography</li>
          <li><img src={process.env.PUBLIC_URL + plant_icon} alt="Planting and Weeding" />Planting and Weeding</li>
          <li><img src={process.env.PUBLIC_URL + data_icon} alt="Data Collection" />Data Collection</li>
          <li><img src={process.env.PUBLIC_URL + smile_icon} alt="And more" />And more!</li>
        </ul>
        <Link to={"../contact"}>
            <button>Get In Touch</button>
        </Link>
      </div>
    </div>
  );
}

export default Volunteer;
