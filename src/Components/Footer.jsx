import React from 'react';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import rabbansGymLogo from '../images/rabbansGymLogo.png';


function Footer(){
  return(
    <footer>
      <div className="footer-row">
        <div className="separator"></div>
      </div>
      <div className="footer-row">
        <div className="footer-half">
          <div className="footer-box">
            <Link to="main" smooth={true} duration={1000}>
              <img src={rabbansGymLogo} alt="rabbans gym logo" className="footer-logo" />
            </Link>
            <p>Best fitness training on this side of the Galaxy</p>
          </div>
          <div className="footer-box">
            <ul className="main-list">
              <li><FaMapMarkerAlt style={{fontSize: "18px", marginRight: "6px"}}/> South Polar Region, Giedi Prime</li>
              <li><FaPhoneAlt style={{fontSize: "18px", marginRight: "6px"}}/> +2248-4432-2233</li>
              <li><FaRegEnvelope style={{fontSize: "18px", marginRight: "6px", marginBottom: "-3px"}}/> RabbansGym@HarkonnenMail.com</li>
            </ul>
            <ul>
              <li>Open</li>
              <li>Monday - Saturday:  06am - 11pm</li>
              <li>Sunday:  08am - 10pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-half">
          <div className="footer-box-2">
            <div className="footer-info">
              <h3>Follow us on social media</h3>
              <ul>
                <li><FaFacebook style={{fontSize: "36px"}} className="social-icons"/></li>
                <li><FaTwitter style={{fontSize: "36px"}} className="social-icons"/></li>
                <li><FaInstagram style={{fontSize: "36px"}} className="social-icons"/></li>
                <li><FaLinkedin style={{fontSize: "36px"}} className="social-icons"/></li>
                <li><FaYoutube style={{fontSize: "36px"}} className="social-icons"/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-row flex-row">
        <p>&copy; Rabban's Gym 2021</p>
        <p>Made with <FaSmileBeam style={{color: "red", fontSize: "16px", marginBottom: "-3px"}}/> by: SarifDesign</p>
      </div>
    </footer>
  );
}


export default Footer;
