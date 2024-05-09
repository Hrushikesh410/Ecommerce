import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import whats from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact Us</li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={insta} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pin} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whats} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer