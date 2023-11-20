import React from 'react';
import './Footer.css';
import footer_logo from '../Assests/logo.png';
import instagram_icons from '../Assests/instagram_icon.png';
import whatsapp_icons from '../Assests/whatsapp_icon.png';
import pintester_icons from '../Assests/pintester_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="..." />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <img src={instagram_icons} alt="" />
        <img src={pintester_icons} alt="" />
        <img src={whatsapp_icons} alt="" />
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
