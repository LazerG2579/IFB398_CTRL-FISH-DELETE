import React from 'react';
import './pages_css/LearnMore.css';
import fishPic from "../images/fish.jpg"
import folwersPic from "../images/flowers.jpg"
import Lilly from "../images/LillyandTheTilly.jpg"
import Footer from '../components/footer';
import { Link } from "react-router-dom"


export default function LearnMore() {
  return (
    <div className="learn-more-container">
      <div className="learn-more-banner"></div>
      <h2 className="resources">Helpful Resources</h2>
      
      <div className="row">
        <div className="left">
          <p>
            Queensland’s Department of Agriculture and Fisheries provides an extensive list of 
            documentation about the invasive species that are causing harm to our environment. Below 
            are some of these documents regarding invasive fish and plants.
          </p>
          <ul>
            <li><a href="https://www.daf.qld.gov.au/__data/assets/pdf_file/0008/1398842/prohibited-restricted-invasive-fish.pdf">Invasive Fish Document</a></li>
            <li><a href="https://www.daf.qld.gov.au/__data/assets/pdf_file/0019/72253/prohibited-invasive-plants.pdf">Invasive Plants Document</a></li>
          </ul>
        </div>
        <div className="right">
          <img src={fishPic} alt ="fish" />
        </div>
      </div>

      <div className="row">
        <div className="left">
          <img src={folwersPic} alt="flowers" />
        </div>
        <div className="right">
          <p>
            For more information about preventing the introduction of harmful species to our waters and 
            our land, check out the Department of Agriculture and Fisheries’ page about biosecurity:
            <a href="https://www.daf.qld.gov.au/business-priorities/biosecurity">Biosecurity Page</a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="left">
          <p>
            For those wanting to teach your children about the importance of biosecurity in protecting 
            our environment, consider reading them Lilly and the Tilly, a fun children’s book that is 
            recommended by the Department of Agriculture and Fisheries.
            <a href="https://www.2bentrods.com.au/product/lilly-and-the-tilly">Lilly and the Tilly Book</a>
          </p>
        </div>
        <div className="right2">
          <img src= {Lilly} alt="Lilly and The Tilly" />
        </div>
      </div>

      <div className="footer-background">
        <h1>Anything We Can Help You With?</h1>
        <h2>We are always open to accepting general enquires about how you can</h2>
        <h2>help improve sustainability in our environment.</h2>
        <Link to={"../contact"}>
            <button>Get In Touch</button>
        </Link>
      </div>

      {<Footer />}
    </div>
  );
}
