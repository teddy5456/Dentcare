import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Ensure this CSS file contains your styles

const Footer = () => {
    return (
        <footer className="footer">
                        <div className="footer-section footer-clients">
                    <h2>Our Clients</h2>
                    <div className="footer-client-logos">
                        <img src="https://149448277.v2.pressablecdn.com/wp-content/uploads/2018/08/Aon-logo.png" alt="Aon" />
                        <img src="https://www.apainsurance.org/img/logon.png" alt="APA Insurance" />
                        <img src="https://images.africanfinancials.com/ke-coop-logo-min-200x200.png" alt="Co-op Bank" />
                        <img src="https://www.contactcenterworld.com/images/company/Saham-1200px-logo.png" alt="Saham" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Equity_Group_Logo.png" alt="Equity Group" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVGQNoz7e2o0aDIxQScppBbraPsZC66l3Dw&s" alt="UAP" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/CIC_Group_Logo.png" alt="CIC Group" />
                        <img src="https://www.sanlam.co.za/Style%20Library/img/sanlam-logo.png" alt="Sanlam" />
                        <img src="https://www.liaisongroup.net/wp-content/themes/lg/images/logo.png" alt="Liason Group" />
                        <img src="https://lifecareinternational.com/wp-content/uploads/2020/10/uap.jpg" alt="LifeCare" />
                        <img src="https://images.africanfinancials.com/ke-jub-logo-min.png" alt="Jubilee Insurance" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsauhTXcXQO4JRL04rDfxQXouSYgKBLHfhQQ&s" alt="Kenya Re" />
                        <img src="https://kenyanwallstreet.com/wp-content/uploads/2022/05/Madison-Insurance-Company-Kenya-1024x513-1.png" alt="Madison Insurance" />
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
