import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 
import saham from '../assets/Saham-1200px-logo-removebg-preview.png'
import apa from '../assets/logon-removebg-preview.png'
import kcb from '../assets/images__1_-removebg-preview.png'
import uap from '../assets/uap-removebg-preview.png'
import postbank from '../assets/images__2_-removebg-preview.png'
import madison from '../assets/Madison-Insurance-Company-Kenya-1024x513-1-removebg-preview.png'

const Footer = () => {
    return (
        <footer className="footer">
               <h2>Our Clients</h2>
            <div className="footer-section footer-clients">
                    
                    <div className='clientss'>
                        <p>
                        We are proud to partner with a diverse array of esteemed clients across various sectors. Our commitment to excellence and customer satisfaction is reflected in the trust these organizations have placed in us. From global insurance leaders to innovative financial institutions, our clients represent a wide range of industries.
                        </p>
                    </div>
                    <div className="footer-client-logos">
                        <img src="https://149448277.v2.pressablecdn.com/wp-content/uploads/2018/08/Aon-logo.png" alt="Aon" />
                        <img src={apa} alt="APA Insurance" />
                        <img src="https://images.africanfinancials.com/ke-coop-logo-min-200x200.png" alt="Co-op Bank" />
                        <img src={saham} alt="Saham" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Equity_Group_Logo.png" alt="Equity Group" />
                        <img src={kcb} alt="UAP" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/CIC_Group_Logo.png" alt="CIC Group" />
                        <img src="https://www.sanlam.co.za/Style%20Library/img/sanlam-logo.png" alt="Sanlam" />
                        <img src="https://www.liaisongroup.net/wp-content/themes/lg/images/logo.png" alt="Liason Group" />
                        <img src={uap} alt="LifeCare" />
                        <img src="https://images.africanfinancials.com/ke-jub-logo-min.png" alt="Jubilee Insurance" />
                        <img src={postbank} alt="Kenya Re" />
                        <img src={madison} alt="Madison Insurance" />
                        <img src="https://www.pioneerassurance.co.ke/wp-content/themes/pioneer/img/pioneerlogo1.png" alt="Pioneer Assurance" />
                        <img src="https://www.atlas-mag.net/sites/default/files/images/AtlasMagazine_2021-12-No186/Fb/Britam-Holdings-fb.png" alt="Britam Holdings" />
                    </div>
                </div>

            <div className="footer-container">

                <div className="footer-section footer-nav">
                    <h2>Navigation</h2>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Use</a></li>
                    </ul>
                </div>

                <div className="footer-section footer-cta">
                    <h2>Book an Appointment</h2>
                    <a href="#appointment" className="cta-button">Book Now</a>
                </div>

                <div>
                <div className="footer-section footer-contact">
                    <h2>Contact Us</h2>
                    <p>Email: <a href="mailto:info@dentplan.com">info@dentplan.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                    <p>Address: 123 Dental St, Tooth City, TC 45678</p>
                </div>

                <div className="footer-section footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>

                </div>

              

            </div>

          

            <div className="footer-bottom">
            <div className="footer-section footer-logo">
                    <span>Dentplan</span>
                </div>
                <p>&copy; {new Date().getFullYear()} Dentplan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
